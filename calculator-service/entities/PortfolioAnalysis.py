from entities.Abstracts import AbstractFactory, FormulatorAbstract
from utilities.decorators import try_except
from entities.WeightMaker import EqualWeightMakerFactory
from entities.EfficientFrontier import EfficientFrontierSharpeFactory
from entities.Formulator import ResamplerFactory
import numpy as np

class PortfolioAnalysis(FormulatorAbstract):
    @try_except
    def calculate(self, df, optimal_weights, minimal_weights):
        list_companies = df.columns_list()
        log_returns = df.daily_log_returns()
        resampler = ResamplerFactory().factory()

        # converting to numpy array for matrix calculations
        optimal_weights = np.asarray(optimal_weights)
        minimal_weights= np.asarray(minimal_weights)

        # calculating weights of equally distributed portfolio
        equal_weights = EqualWeightMakerFactory().factory().calculate(len(list_companies))

        # calculating returns with equal, optimal risk adjusted and minimal volatility distributions
        log_returns['equal'] = log_returns[list_companies].dot(equal_weights)
        log_returns['optimal'] = log_returns[list_companies].dot(optimal_weights)
        log_returns['minimal'] = log_returns[list_companies].dot(minimal_weights)
        log_returns.dropna(axis=0, inplace=True)

        # calculating cumulative returns, rolling volatility and filtering to select 2 entries per year
        cumulative_returns = resampler.calculate(log_returns.cumsum())
        rolling_volatility = resampler.calculate((log_returns.rolling(42).std() * np.sqrt(42)).dropna(axis=0, how='any'))

        return {'rolling_volatility':rolling_volatility, 'cumulative_returns':cumulative_returns}


class PortfolioAnalysisFactory(AbstractFactory):
    def factory(self):
        return PortfolioAnalysis()










