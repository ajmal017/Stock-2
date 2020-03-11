from abc import abstractmethod, ABC
import numpy as np
import pandas as pd
from entities.Factory import AbstractFactory


class FormulatorAbstract(ABC):
    @abstractmethod
    def calculate(self, *args, **kwargs): pass


class AnnualMeanLogRiskReturns(FormulatorAbstract):
    def calculate(self, df):
        log_returns = np.log(df / df.shift(1))
        companies = df.columns.tolist()

        price_volatility = round(
            log_returns[companies].std() * 250 ** 0.5 * 100, 3).tolist()
        returns = round(log_returns[companies].mean() * 250 * 100, 3).tolist()

        data = []
        for index, ticker in enumerate(companies):
            dictionary = {
                'price_volatility': price_volatility[index], 'ticker': ticker, 'annual_mean_return': returns[index]}
            data.append(dictionary)
        return data


class AnnualMeanLogRiskReturnsFactory(AbstractFactory):
    def factory(self):
        return AnnualMeanLogRiskReturns()


class HistoryPriceNormalized(FormulatorAbstract):
    def calculate(self, df):
        normalized_price = round((df / df.iloc[0] * 100), 2)
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


class WeightMaker(FormulatorAbstract):
    def calculate(self, array_of_tickers):
        ratio = 100/len(array_of_tickers)/100
        weights = np.array([])
        for symbol in array_of_tickers:
            weights = np.append(weights, [ratio])
        return weights
