from typing import List
from fastapi import APIRouter, HTTPException

from entities.TickerRunner import TickerRunner

from entities.DataFramer import DataframerFactory, DataFrameJoinerFactory
from constants.CONSTANTS import HISTORICAL_DATA
from entities.Calculator import CalculatorFactory
from entities.Formulator import AnnualMeanLogRiskReturnsFactory
from models.api import StockMetricsOut, StockHistoryIn

router = APIRouter()


@router.post('/stockMetrics', response_model=StockMetricsOut)
async def calculate_financial_metrics(body: StockHistoryIn):
    try:
        # Initialising objects
        DataFrameJoiner = DataFrameJoinerFactory().factory()
        calculator = CalculatorFactory().factory()
        annual_mean_log_returns_formula = AnnualMeanLogRiskReturnsFactory().factory()

        # this array will hold all the ticker entities
        # a ticker is a company with a dataframe with data
        tickers = []

        for tick in body.historicData:
            # creating ticker entity with dataframe with all columns
            ticker = TickerRunner.create_ticker_with_dataframe(tick, 'name', 'history')

            # pushing ticker entities to array
            tickers.append(ticker)

        # joining dataframes of each ticker. The ['close'] column is taken from each each dataframe
        df_close = DataFrameJoiner.join_dataframes(
            tickers, HISTORICAL_DATA.CLOSE.value)

        # composing calculator with formulas -> composite pattern
        calculator.add_formula(annual_mean_log_returns_formula)

        # composing calculator with data
        calculator.add_data(df_close)

        # executing all formulas in calculator and unpacking it
        annual_mean_log_risk_returns, = calculator.calculate()

        return {'stock_annual_log_risk_return': annual_mean_log_risk_returns}

    except Exception as err:
        raise HTTPException(status_code=400, detail=str(err))
