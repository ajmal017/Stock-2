from abc import abstractmethod, ABC
import numpy as np
import pandas as pd
from entities.Factory import AbstractFactory


class FormulatorAbstract(ABC):
    @abstractmethod
    def calculate(self, *args, **kwargs): pass


class AnnualMeanLogRiskReturns(FormulatorAbstract):
    def calculate(self, df):
        log_returns = np.log(df / df.shift(1)).dropna(how='any')
        companies = df.columns.tolist()

        price_volatility = round((log_returns[companies].std() * 250 ** 0.5 * 100), 2).tolist()
        returns = round((log_returns[companies].mean() * 252 * 100), 2).tolist()

        data = []
        for index, ticker in enumerate(companies):
            dictionary = {'price_volatility': price_volatility[index], 'ticker': ticker, 'annual_mean_return': returns[index]}
            data.append(dictionary)
        return data


class AnnualMeanLogRiskReturnsFactory(AbstractFactory):
    def factory(self):
        return AnnualMeanLogRiskReturns()


class HistoryPriceNormalized(FormulatorAbstract):
    def calculate(self, df):
        normalized_price = (df / df.iloc[0] * 100).round(3)
        return normalized_price


class HistoryPriceNormalizedFactory(AbstractFactory):
    def factory(self):
        return HistoryPriceNormalized()


class Resampler(FormulatorAbstract):
    def __init__(self, period):
        self._period = period

    def calculate(self, df):
        df.index = pd.to_datetime(df.index)
        new_df = df.resample(self._period).mean()
        return new_df



class ResamplerFactory(AbstractFactory):
    def factory(self, period):
        return Resampler(period)
