from abc import abstractmethod, ABC
import numpy as np
import pandas as pd
from entities.Factory import AbstractFactory


class FormulatorAbstract(ABC):
    @abstractmethod
    def calculate(self, *args, **kwargs): pass


class AnnualMeanRiskReturns(FormulatorAbstract):
    def calculate(self, df):
        simple_returns = (df / df.shift(1)) - 1
        companies = df.columns.tolist()

        price_volatility = round(
            simple_returns[companies].std() * 250 ** 0.5 * 100, 3).tolist()
        returns = round(
            simple_returns[companies].mean() * 250 * 100, 3).tolist()

        data = []
        for index, ticker in enumerate(companies):
            dictionary = {
                'price_volatility': price_volatility[index], 'ticker': ticker, 'annual_mean_return': returns[index]}
            data.append(dictionary)
        return data


class AnnualMeanLogRiskReturnsFactory(AbstractFactory):
    def factory(self):
        return AnnualMeanRiskReturns()


class HistoryPriceNormalized(FormulatorAbstract):
    def calculate(self, df):
        normalized_price = round(df / df.iloc[0] * 100, 2)
        return normalized_price


class HistoryPriceNormalizedFactory(AbstractFactory):
    def factory(self):
        return HistoryPriceNormalized()


class Resampler(FormulatorAbstract):
    def calculate(self, df):
        df = df.head(1).append(
            df.loc[(df.index.day == 31) & (df.index.month == 12) | (df.index.day == 30) & (df.index.month == 6)])
        return df


class ResamplerFactory(AbstractFactory):
    def factory(self):
        return Resampler()


class EqualWeightMaker(FormulatorAbstract):
    def calculate(self, number_of_tickers):
        ratio = 1/number_of_tickers
        weights = np.array([])
        for i in range(0, number_of_tickers):
            weights = np.append(weights, ratio)
        weights /= np.sum(weights)
        return weights


class EqualWeightMakerFactory(AbstractFactory):
    def factory(self):
        return EqualWeightMaker()


class PortfolioRiskReturn(FormulatorAbstract):
    def calculate(self, df):
        weights = EqualWeightMakerFactory().factory().calculate(df.shape[1])
        # calculate portfolio returns using the mean of the annual simple returns and equal weights
        simple_returns = (df / df.shift(1)) - 1
        simple_annual_returns = simple_returns.mean() * 250
        portfolio_returns = round(
            np.dot(simple_annual_returns, weights) * 100, 3)

        """
        calculate the portfolio volatility based on the deviation
        of the mean of the annual log returns and equal weights"""
        log_returns = np.log(df/df.shift(1))
        cov_matrix_annual = log_returns.cov() * 250
        portfolio_volatility = round(
            ((np.dot(weights.T, np.dot(cov_matrix_annual, weights))) ** 0.5) * 100, 3)

        data = {'portfolio_returns': portfolio_returns,
                'portfolio_volatility': portfolio_volatility}
        return data


class PortfolioRiskReturnFactory(AbstractFactory):
    def factory(self):
        return PortfolioRiskReturn()


class Divider:
    @staticmethod
    def divide(num1, num2, rounder=None):
        if rounder is not None:
            return round((num1 / num2) - 1,  rounder)
        else:
            return (num1 / num2) - 1

# new function added below - need to confirm if log returns or standard returns should be used
# class EfficientFrontier(FormulatorAbstract):
#     def calculate(self, df):
#         iterations = 1000
#         log_returns = np.log(df / df.shift(1))
#         num_assets = len(df.columns.tolist())
#         frontier = []
#         for i in range(iterations):
#             weights = np.random.random(num_assets)
#             weights /= np.sum(weights)
#             result = {
#                 'returns': round(np.sum(weights * log_returns.mean()) * 250 * 100, 4),
#                 'volatility': round(np.sqrt(np.dot(weights.T, np.dot(log_returns.cov() * 250, weights))) * 100, 4)
#             }
#             frontier.append(result)
#         return frontier
#
#
# class EfficientFrontierFactory(AbstractFactory):
#     def factory(self):
#         return EfficientFrontier()


class EfficientFrontierSharpe(FormulatorAbstract):
    def calculate(self, df):
        # calculate daily and annual returns of the stocks
        returns_daily = df.pct_change()
        returns_annual = returns_daily.mean() * 250

        # get daily and covariance of returns of the stock
        cov_daily = returns_daily.cov()
        cov_annual = cov_daily * 250

        # empty lists to store returns, volatility and weights of imiginary portfolios
        result = []
        max_sharpe_ratio = float('-inf')
        min_volatility = float('inf')
        max_sharpe_portfolio = {}
        min_volatility_portfolio = {}

        # set the number of combinations for imaginary portfolios
        num_assets = df.shape[1]
        num_portfolios = 2000

        # set random seed for reproduction's sake
        np.random.seed(101)

        for i in range(num_portfolios):
            weights = np.random.random(num_assets)
            weights /= np.sum(weights),
            returns = np.dot(weights, returns_annual)
            volatility = np.sqrt(
                np.dot(weights.T, np.dot(cov_annual, weights)))
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

            if volatility < min_volatility:
                min_volatility = volatility
                min_volatility_portfolio = portfolio

            result.append(portfolio)
        return {'frontier': result,
                'max_sharpe': [max_sharpe_portfolio],
                'min_volatility': [min_volatility_portfolio]
                }


class EfficientFrontierSharpeFactory(AbstractFactory):
    def factory(self):
        return EfficientFrontierSharpe()
