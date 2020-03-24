from typing import List
from fastapi import APIRouter, HTTPException

from entities.DataFramer import DataframerFactory, DataFrameJoinerFactory
from constants.CONSTANTS import HISTORICAL_DATA
from entities.Calculator import CalculatorFactory
from entities.Formulator import SimpleMeanLogRiskReturnsFactory
from models.api import StockMetricsOut, StockHistoryIn
from entities.utilities import DictionaryConverterFactory
from entities.TickerRunner import TickerRunner

router = APIRouter()


@router.post('/stockMetrics', response_model=StockMetricsOut)
async def calculate_financial_metrics(body: StockHistoryIn):
    try:
        # Initialising objects
        DataFrameJoiner = DataFrameJoinerFactory().factory()
        calculator = CalculatorFactory().factory()
        dict_converter = DictionaryConverterFactory().factory()
        simple_risk_returns_formula = SimpleMeanLogRiskReturnsFactory().factory()

        """this array will hold all the ticker entities.
        A ticker is a company with a dataframe"""
        tickers = []

        for tick in body.historicData:
            # creating ticker entity with dataframe with all columns
            ticker = TickerRunner.create_ticker_with_dataframe(
                tick, 'name', 'history')
            # pushing ticker entities to array
            tickers.append(ticker)

        # joining dataframes of each ticker. The ['close'] column is taken from each each dataframe
        df_close = DataFrameJoiner.join_dataframes(
            tickers, HISTORICAL_DATA.CLOSE.value)

        df_volume = DataFrameJoiner.join_dataframes(
            tickers, HISTORICAL_DATA.VOLUME.value)

        stock_price_today = df_close.tail(1).iloc[0].values
        stock_price_yesterday = df_close[:-1].tail(1).iloc[0].values
        stock_price_difference = stock_price_today - stock_price_yesterday
        stock_price_change_pct = ((stock_price_today / stock_price_yesterday) - 1) * 100

        stock_volume_today = df_close.tail(1).iloc[0].values
        stock_volume_yesterday = df_close[:-1].tail(1).iloc[0].values
        stock_volume_difference = stock_volume_today - stock_volume_yesterday
        stock_volume_change_pct = ((stock_volume_today / stock_volume_yesterday) - 1) * 100

        calculator.add_formula(simple_risk_returns_formula)
        calculator.add_data(df_close)

        annual_mean_log_risk_returns, = calculator.calculate()

        result = []

        return {'stock_annual_log_risk_return': annual_mean_log_risk_returns}

    except Exception as err:
        raise HTTPException(status_code=400, detail=str(err))
