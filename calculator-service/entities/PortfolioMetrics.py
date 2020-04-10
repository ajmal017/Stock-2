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
            raise RuntimeError('EqualWeightMaker formula failed')


class EqualWeightMakerFactory(AbstractFactory):
    def factory(self):
        return EqualWeightMaker()


class PortfolioRiskReturn(FormulatorAbstract):
    def calculate(self, df):
        try:
            """calculator portfolio returns """
            number_assets = len(df.columns.tolist())
            weights = EqualWeightMakerFactory().factory().calculate(number_assets)
            # calculate portfolio returns using the mean of the annual simple returns and equal weights
            simple_returns = np.log(df/df.shift(1))
            annual_simple_returns = simple_returns.mean() * 250
            portfolio_returns = round(
                np.dot(annual_simple_returns, weights) * 100, 2)
            """
            calculate the portfolio volatility based on the deviation
            of the mean of the annual log returns and equal weights"""
            log_returns = np.log(df/df.shift(1))
            cov_matrix_annual = log_returns.cov() * 250
            portfolio_variance = np.dot(weights.T, np.dot(cov_matrix_annual, weights))
            portfolio_volatility = round(portfolio_variance ** 0.5 * 100, 2)
            sharpe = round(portfolio_returns / portfolio_volatility * 100, 2)

            """ calculating systematic and unsystematic risk"""
            stocks_risks = 0
            list_stocks = df.columns.tolist()
            for i in range(number_assets):
                stock = list_stocks[i]
                stock_variance = log_returns[stock].var() * 250
                calculation = weights[i] ** 2 * stock_variance
                stocks_risks += calculation
            idiosyncratic_risk = portfolio_variance - stocks_risks
            systematic_risk = portfolio_variance - idiosyncratic_risk

            idiosyncratic_risk = round(idiosyncratic_risk * 100, 3)
            systematic_risk = round(systematic_risk * 100, 3)
            portfolio_variance = round(portfolio_variance * 100, 3)

            data = {'portfolio_returns': portfolio_returns,
                    'portfolio_volatility': portfolio_volatility,
                    'systematic_risk': systematic_risk,
                    'idiosyncratic_risk': idiosyncratic_risk,
                    'portfolio_variance': portfolio_variance,
                    'sharpe_ratio':sharpe
                    }
            return data
        except Exception as err:
            raise RuntimeError('PortfolioRiskReturn formula failed')


class PortfolioRiskReturnFactory(AbstractFactory):
    def factory(self):
        return PortfolioRiskReturn()