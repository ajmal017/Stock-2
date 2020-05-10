from fastapi import APIRouter, HTTPException
import Logger
from models.api import StockHistoryIn
from entities.DataFramer import DataframerFactory, DataFrameJoinerFactory
from constants.CONSTANTS import HISTORICAL_DATA
from entities.Calculator import CalculatorFactory
from entities.TickerRunner import TickerRunner
from constants.CONSTANTS import HISTORICAL_DATA
from entities.PortfolioAnalysis import PortfolioAnalysisFactory
from entities.utilities import DictionaryConverterFactory

logger = Logger.getLogger(__name__)
router = APIRouter()



@router.post('/portfolioAnalysis')
async def calculate_portfolio_analysis(body:StockHistoryIn):
    try:
        dataFrameJoiner = DataFrameJoinerFactory().factory()
        calculator = CalculatorFactory().factory()
        portfolio_analysis_formula = PortfolioAnalysisFactory().factory()
        dict_converter = DictionaryConverterFactory().factory()
        # this array will hold all the ticker entities a ticker is a company with a dataframe with data
        tickers = []

        for tick in body.historicData:
            # creating ticker entity with dataframe with all columns
            ticker = TickerRunner.create_ticker_with_dataframe(
                tick, 'name', 'history')
            # pushing ticker entities to array
            tickers.append(ticker)

        # joining dataframes of each ticker. The ['close'] column is taken from each each dataframe
        df_close = dataFrameJoiner.join_dataframes(tickers, HISTORICAL_DATA.CLOSE.value)
        calculator.add_formula(portfolio_analysis_formula)
        calculator.add_data(df_close)
        result, = calculator.calculate()

        return {
            'rolling_volatility': dict_converter.convert_to_dictionary(result['rolling_volatility']),
            'cumulative_returns': dict_converter.convert_to_dictionary(result['cumulative_returns'])
        }

    except Exception as err:
        logger.error('/portfolioAnalysis api failed', err)
        raise HTTPException(status_code=400, detail=str('internal error in stockHistorical API'))
