from typing import List
from fastapi import APIRouter, HTTPException

from entities.DataFramer import DataframerFactory, DataFrameJoinerFactory
from constants.CONSTANTS import HISTORICAL_DATA
from entities.Calculator import CalculatorFactory
from entities.Formulator import SimpleMeanLogRiskReturnsFactory
from models.api import StockMetricsOut, StockHistoryIn
from entities.TickerRunner import TickerRunner

router = APIRouter()


@router.post('/stockMetrics', response_model=StockMetricsOut)
async def calculate_financial_metrics(body: StockHistoryIn):
    try:
        # Initialising objects
        DataFrameJoiner = DataFrameJoinerFactory().factory()
        calculator = CalculatorFactory().factory()
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

        calculator.add_formula(simple_risk_returns_formula)
        calculator.add_data(df_close)

        annual_mean_log_risk_returns, = calculator.calculate()

        return {'stock_annual_log_risk_return': annual_mean_log_risk_returns}

    except Exception as err:
        raise HTTPException(status_code=400, detail=str(err))
