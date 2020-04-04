from fastapi import APIRouter, HTTPException

from entities.DataFramer import DataframerFactory, DataFrameJoinerFactory
from constants.CONSTANTS import HISTORICAL_DATA
from entities.Calculator import CalculatorFactory
from entities.Formulator import Divider
from entities.PortfolioMetrics import PortfolioRiskReturnFactory
from models.api import PortfolioMetricsOut, StockHistoryIn
from entities.TickerRunner import TickerRunner
import Logger

logger = Logger.getLogger(__name__)
router = APIRouter()


@router.post('/portfolioMetrics', response_model=PortfolioMetricsOut)
async def calculate_financial_metrics(body: StockHistoryIn):
    try:
        # Initialising objects
        DataFrameJoiner = DataFrameJoinerFactory().factory()
        calculator = CalculatorFactory().factory()
        portfolio_risk_returns_formula = PortfolioRiskReturnFactory().factory()

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
        calculator.add_formula(portfolio_risk_returns_formula)
        # composing calculator with data
        calculator.add_data(df_close)

        # executing all formulas in calculator and unpacking it
        portfolio_risk_returns, = calculator.calculate()
        # calculating returns and risk the day before
        # adding data until yesterday
        calculator.add_data(df_close[:-1])

        yesterday_annual_mean_log_risk_returns, = calculator.calculate()

        returns_change = Divider.divide(
            portfolio_risk_returns['portfolio_returns'],
            yesterday_annual_mean_log_risk_returns['portfolio_returns'],
            4)

        volatility_change = Divider.divide(
            portfolio_risk_returns['portfolio_volatility'],
            yesterday_annual_mean_log_risk_returns['portfolio_volatility'],
            4)

        portfolio_risk_returns['portfolio_returns_change'] = returns_change
        portfolio_risk_returns['portfolio_volatility_change'] = volatility_change

        return {'portfolio_risk_returns': portfolio_risk_returns}

    except Exception as err:
        logger.error('/portfolioMetrics api failed', err)
        raise HTTPException(status_code=400, detail=str('internal error in portfolioMetrics API'))
