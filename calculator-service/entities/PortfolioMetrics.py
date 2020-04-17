import numpy as np
import pandas as pd
from entities.Abstracts import AbstractFactory, FormulatorAbstract


class EqualWeightMaker(FormulatorAbstract):
    def calculate(self, number_of_tickers):
        try:
            ratio = 1/number_of_tickers
            weights = np.array([])
            for i in range(number_of_tickers):
                weights = np.append(weights, ratio)
            weights /= np.sum(weights)
            return weights
        except Exception as err:
            raise RuntimeError(f'EqualWeightMaker formula failed {err}')


class EqualWeightMakerFactory(AbstractFactory):
    def factory(self):
        return EqualWeightMaker()


class PortfolioRiskReturn(FormulatorAbstract):
    def calculate(self, df):
        try:
            print(df.dataframe.shape)
            """calculator portfolio returns """
            number_assets = len(df.columns_list())
            weights = EqualWeightMakerFactory().factory().calculate(number_assets)

            # calculate portfolio returns using the mean of the annual simple returns and equal weights
            portfolio_returns = df.weighted_log_returns(weights)
            portfolio_volatility = df.weighted_log_volatility(weights)
            sharpe = portfolio_returns / portfolio_volatility

            data = {'portfolio_returns': round(portfolio_returns * 100, 2),
                    'portfolio_volatility': round(portfolio_volatility * 100, 2),
                    'sharpe_ratio':round(sharpe * 100, 2)}

            return data
        except Exception as error:
            raise RuntimeError(f'PortfolioRiskReturn formula failed {error}')


class PortfolioRiskReturnFactory(AbstractFactory):
    def factory(self):
        return PortfolioRiskReturn()