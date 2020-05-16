from typing import List
from fastapi import APIRouter, HTTPException

from entities.DataFramer import DataframerFactory, DataFrameJoinerFactory
from constants.CONSTANTS import HISTORICAL_DATA
from entities.Calculator import CalculatorFactory
from entities.StockOptions import OptionsPricerFactory
from models.api import StockHistoryIn
from models.stock_options_api import StockOptionsResponse
from entities.TickerRunner import TickerRunner
import Logger

logger = Logger.getLogger(__name__)
router = APIRouter()


@router.post('/stockOptions',response_model=StockOptionsResponse )
async def calculate_financial_metrics(body: StockHistoryIn):
    try:
        # Initialising objects
        DataFrameJoiner = DataFrameJoinerFactory().factory()
        calculator = CalculatorFactory().factory()
        options_formula = OptionsPricerFactory().factory()

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
        calculator.add_formula(options_formula)
        calculator.add_data(df_close)

        options_prices, = calculator.calculate()

        return options_prices

    except Exception as err:
        logger.error('/stockPredictions failed', err)
        raise HTTPException(status_code=400, detail=str('internal error in stockMetrics API'))
