from fastapi import APIRouter, HTTPException

from entities.DataFramer import DataframerFactory, DataFrameJoinerFactory
from constants.CONSTANTS import HISTORICAL_DATA
from entities.Calculator import CalculatorFactory
from entities.Formulator import ResamplerFactory, HistoryPriceNormalizedFactory
from models.api import StockHistoryOut, StockHistoryIn
from entities.utilities import DictionaryConverterFactory
from entities.TickerRunner import TickerRunner
import logging

logger = logging.getLogger(__name__)
router = APIRouter()


@router.post('/stockHistorical', response_model=StockHistoryOut)
async def calculate_financial_metrics(body: StockHistoryIn):
    try:
        # Initialising objects
        DataFrameJoiner = DataFrameJoinerFactory().factory()
        calculator = CalculatorFactory().factory()
        normalized_price_formula = HistoryPriceNormalizedFactory().factory()
        annual_resampler = ResamplerFactory().factory()
        dict_converter = DictionaryConverterFactory().factory()

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

        # composing calculator with formulas and data -> composite pattern
        calculator.add_formula(normalized_price_formula)
        calculator.add_data(df_close)

        # executing all formulas in calculator and unpacking it
        normalized_price,  = calculator.calculate()

        # resampling to yearly frequency
        annual_price = annual_resampler.calculate(df_close)
        price_history_normalized = annual_resampler.calculate(
            normalized_price)

        return {
            'price_history': dict_converter.convert_to_dictionary(annual_price),
            'price_history_normalized': dict_converter.convert_to_dictionary(price_history_normalized)
        }

    except Exception as err:
        logger.error('/stockHistorical api failed', err)
        raise HTTPException(status_code=400, detail=str('internal error in stockHistorical API'))
