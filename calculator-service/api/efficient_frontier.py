from typing import List
from fastapi import APIRouter, HTTPException

from entities.TickerRunner import TickerRunner

from entities.DataFramer import DataframerFactory, DataFrameJoinerFactory
from constants.CONSTANTS import HISTORICAL_DATA
from entities.Calculator import CalculatorFactory
from entities.Formulator import EfficientFrontierSharpeFactory
from models.api import EfficientFrontierOut, StockHistoryIn
import logging

logger = logging.getLogger(__name__)
router = APIRouter()


@router.post('/efficientFrontier')
async def calculate_financial_metrics(body: StockHistoryIn):
    try:
        # Initialising objects
        DataFrameJoiner = DataFrameJoinerFactory().factory()
        calculator = CalculatorFactory().factory()
        efficient_frontier_formula = EfficientFrontierSharpeFactory().factory()

        # this array will hold all the ticker entities
        # a ticker is a company with a dataframe with data
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
        # composing calculator with formulas -> composite pattern
        calculator.add_formula(efficient_frontier_formula)

        # composing calculator with data
        calculator.add_data(df_close)

        # executing all formulas in calculator and unpacking it
        efficient_frontier, = calculator.calculate()

        return {'efficient_frontier': efficient_frontier}

    except Exception as err:
        logger.error('stockPredictions failed', error)
        raise HTTPException(status_code=400, detail=str(err))
