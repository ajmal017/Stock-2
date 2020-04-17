from typing import List
from fastapi import APIRouter, HTTPException

from entities.DataFramer import DataFrameJoinerFactory
from constants.CONSTANTS import HISTORICAL_DATA
from entities.Calculator import CalculatorFactory
from entities.Beta import BetaFactory
from models.api import BetaOut, StockHistoryIn
from entities.TickerRunner import TickerRunner
import logging
import pandas as pd

router = APIRouter()
logger = logging.getLogger(__name__)


@router.post('/stockDetails', response_model=BetaOut)
async def calculate_financial_metrics(body: StockHistoryIn):
    try:
        # Initialising objects
        DataFrameJoiner = DataFrameJoinerFactory().factory()
        beta_formula = BetaFactory().factory()

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

        stock_price_change_value, stock_price_change_pct = df_close.change_last_day()
        stock_volume_change_value, stock_volume_change_pct = df_volume.change_last_day()

        results = []
        list_companies = df_close.columns_list()

        for i in range(len(list_companies) - 1):
            ticker = list_companies[i]
            calculator = CalculatorFactory().factory()
            calculator.add_formula(beta_formula)
            calculator.add_data(df_close[[ticker, '^GSPC']])
            calculations, = calculator.calculate()
            beta = calculations['beta']
            alpha = calculations['alpha']

            expected_returns = 0.83 + beta * 0.05

            entry = {
                'price': stock_price_today[i],
                'price_change_value': round(stock_price_change_value[i],4),
                'price_change_pct': round(stock_price_change_pct[i], 4),
                'volume': stock_volume_today[i],
                'volume_change_value': round(stock_volume_change_value[i], 4),
                'volume_change_pct':round(stock_volume_change_pct[i], 4),
                'beta': round(beta,2),
                'ticker': list_companies[i],
                'expected_returns': round(expected_returns, 4),
                'alpha':alpha
            }
            results.append(entry)
        return {'stock_details': results}

    except Exception as err:
        logger.error('stockDetail api error', err)
        raise HTTPException(status_code=400, detail=str('internal error in stockDetails API'))
