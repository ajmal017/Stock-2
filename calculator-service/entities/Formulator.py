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
        returns = round(simple_returns[companies].mean() * 250 * 100, 3).tolist()

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
        portfolio_returns = round(np.dot(simple_annual_returns, weights) * 100, 3)

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
            print(num1, num2, rounder)
            return round((num1 / num2) - 1,  rounder)
        else:
            return (num1 / num2) - 1
