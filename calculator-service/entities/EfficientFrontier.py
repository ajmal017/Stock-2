import numpy as np
import pandas as pd
from scipy.stats import norm, linregress
from entities.Abstracts import AbstractFactory, FormulatorAbstract
from entities.DataFrame import DataFrameFactory

class EfficientFrontierSharpe(FormulatorAbstract):
    def calculate(self, df):
        try:
            # number of assets to calculate weights
            companies = df.columns_list()
            num_assets = len(companies)

            # empty lists to store returns, volatility and weights of imaginary portfolios
            result = []
            max_sharpe_ratio = float('-inf')
            min_volatility_ratio = float('inf')
            max_sharpe_portfolio = []
            min_volatility_portfolio = []
            max_sharpe_distribution = []
            min_volatility_distribution = []

            # set the number of combinations for imaginary portfolios
            num_portfolios = 2000

            # set random seed for reproduction's sake
            np.random.seed(101)

            for i in range(num_portfolios):
                weights = np.random.random(num_assets)
                weights /= np.sum(weights)
                returns = df.weighted_log_returns(weights)
                volatility = df.weighted_log_volatility(weights)
                sharpe = returns / volatility

                # create dictionary with calculations and push into results array
                portfolio = {'returns': returns,
                             'volatility': volatility,
                             'sharpe_ratio': sharpe,
                             'weights': list(weights)
                             }

                if sharpe > max_sharpe_ratio:
                    max_sharpe_ratio = sharpe
                    max_sharpe_portfolio = portfolio
                    distribution= []
                    for index, company in enumerate(companies):
                        entry = {
                            'ticker':company,
                            'value': round(weights[index], 2) * 100
                        }
                        distribution.append(entry)
                    max_sharpe_distribution = distribution

                if volatility < min_volatility_ratio:
                    min_volatility_ratio = volatility
                    min_volatility_portfolio = portfolio
                    distribution= []
                    for index, company in enumerate(companies):
                        entry = {
                            'ticker':company,
                            'value': round(weights[index], 2) * 100
                        }
                        distribution.append(entry)
                    min_volatility_distribution = distribution

                result.append(portfolio)

            return {'frontier': result,
                    'max_sharpe_portfolio': [max_sharpe_portfolio],
                    'max_sharpe_distribution': max_sharpe_distribution,
                    'min_volatility_portfolio': [min_volatility_portfolio],
                    'min_volatility_distribution':min_volatility_distribution
                    }
        except Exception as err:
            raise RuntimeError('EfficientFrontierSharpe formula failed')


class EfficientFrontierSharpeFactory(AbstractFactory):
    def factory(self):
        return EfficientFrontierSharpe()