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
        log_returns = np.log(df_close/df_close.shift(1))

        results = []

        for ticker in list_companies:
            dataframe = log_returns[[ticker]]
            mean = dataframe.mean()
            variance = dataframe.var()
            drift = mean - (0.5 * variance)
            std = dataframe.std()
            Z = norm.ppf(np.random.rand(10,2))
            t_intervals = 1000
            iterations = 10
            daily_returns = np.exp(drift.values + std.values * norm.ppf(np.random.rand(t_intervals, iterations)))
            S0 = dataframe.iloc[-1]
            price_list = np.zeros_like(daily_returns)
            price_list[0] = S0
            for t in range(1, t_intervals):
                price_list[t] = price_list[t - 1] * daily_returns[t]


            ticker = list_companies[i]
            calculator = CalculatorFactory().factory()
            calculator.add_formula(beta_formula)
            calculator.add_data(df_close[[ticker, '^GSPC']])
            beta, = calculator.calculate()
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
                'expected_returns': round(expected_returns, 4)
            }
            results.append(entry)

        return {'stock_details': results}

    except Exception as err:
        logger.error('/stockPredictions failed', error)
        raise HTTPException(status_code=400, detail=str('internal error in stockPredictions API'))
