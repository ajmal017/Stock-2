from typing import List
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from entities.Filter import HistoricalDataFilterFactory
from entities.Requester import RequesterFactory
from entities.Ticker import TickerFactory
from entities.Url import UrlPriceCreatorFactory
from entities.DataFramer import DataframerFactory, DataFrameJoinerFactory
from constants.CONSTANTS import HISTORICAL_DATA
from entities.Calculator import CalculatorFactory
from entities.Formulator import AnnualMeanLogRiskReturnsFactory, ResamplerFactory, HistoryPriceNormalizedFactory
from models.api import FinancialMetricsOut, FinancialMetricsIn
from entities.utilities import DictionaryConverterFactory

router = APIRouter()


@router.post('/financialMetrics', response_model=FinancialMetricsOut)
async def calculate_financial_metrics(metrics: FinancialMetricsIn):
    try:
        # Initialising objects
        filterer = HistoricalDataFilterFactory().factory()
        requester = RequesterFactory().factory()
        dataframer = DataframerFactory().factory()
        DataFrameJoiner = DataFrameJoinerFactory().factory()
        calculator = CalculatorFactory().factory()
        annual_mean_log_returns_formula = AnnualMeanLogRiskReturnsFactory().factory()
        annual_resampler = ResamplerFactory().factory('Y')
        normalized_price = HistoryPriceNormalizedFactory().factory()
        dict_converter = DictionaryConverterFactory().factory()

        # these array will hold all the ticker entities
        # a ticker is a company with a dataframe with data
        tickers = []

        for tick in metrics.tickers:
            # creating ticker (company object to hold data) - considering moving this to a static method in class and not initilising
            ticker = TickerFactory().factory(tick)

            # creating url to fetch historical data -
            url_creator = UrlPriceCreatorFactory().factory(ticker.get_ticker())
            url = url_creator.create_url()
            # fetching data
            response = requester.get_data(url)
            # filtering response
            filtered_response = filterer.filter(response, 'history')
            # creating a pandas frame and moving it to the ticker entity
            ticker.dataframe = dataframer.create_dataframe(filtered_response)
            # pushing ticker entities to array
            tickers.append(ticker)

        # joining dataframes of each ticker. The ['close'] column is taken from each each dataframe
        df_close = DataFrameJoiner.join_dataframes(
            tickers, HISTORICAL_DATA.CLOSE.value)

        # composing calculator with formulas -> composite pattern
        calculator.add_formula(annual_mean_log_returns_formula)
        calculator.add_formula(normalized_price)
        # composing calculator with data
        calculator.add_data(df_close)

        # executing all formulas in calculator and unpacking it
        annual_mean_log_returns, normalized_price = calculator.calculate()

        # resampling to yearly frequency
        annual_price = annual_resampler.calculate(df_close)
        price_history_normalized = annual_resampler.calculate(normalized_price)

        return {
            'price_history': dict_converter.convert_to_dictionary(df_close),
            'price_history_change': dict_converter.convert_to_dictionary(annual_price),
            'price_history_normalized': dict_converter.convert_to_dictionary(price_history_normalized),
            'stock_annual_log_risk_return': annual_mean_log_returns,
            'symbols': metrics.tickers
        }

    except Exception as err:
        raise HTTPException(status_code=400, details=str(err))
