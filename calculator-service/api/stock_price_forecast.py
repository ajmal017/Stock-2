from typing import List
from fastapi import APIRouter, HTTPException

from entities.DataFramer import DataFrameJoinerFactory
from constants.CONSTANTS import HISTORICAL_DATA
from entities.Calculator import CalculatorFactory
from entities.Formulator import BetaFactory
from models.api import BetaOut, StockHistoryIn
from entities.TickerRunner import TickerRunner
import Logger
import pandas as pd

logger = Logger.getLogger(__name__)

router = APIRouter()


@router.post('/stockPredictions', response_model=BetaOut)
async def calculate_stock_predictions(body: StockHistoryIn):
    try:
        # Initialising objects
        DataFrameJoiner = DataFrameJoinerFactory().factory()

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




        return {'stock_details': results}

    except Exception as err:
        logger.error('/stockPredictions failed', error)
        raise HTTPException(status_code=400, detail=str('internal error in stockPredictions API'))
