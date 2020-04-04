from abc import abstractmethod, ABC
import numpy as np
import pandas as pd
from scipy.stats import norm, linregress
from entities.Abstracts import AbstractFactory, FormulatorAbstract


class SimpleMeanRiskReturns(FormulatorAbstract):
    def calculate(self, df):
        try:
            simple_returns = (df / df.shift(1)) - 1
            companies = df.columns.tolist()

            price_volatility = round(
                simple_returns[companies].std() * 250 ** 0.5 * 100, 2).tolist()
            returns = round(
                simple_returns[companies].mean() * 250 * 100, 2).tolist()

            data = []
            for index, ticker in enumerate(companies):
                dictionary = {
                    'price_volatility': price_volatility[index], 'ticker': ticker, 'annual_mean_return': returns[index]}
                data.append(dictionary)
            return data
        except Exceptions as err:
            raise RuntimeError('SimpleMeanRiskReturns formula failed')


class SimpleMeanLogRiskReturnsFactory(AbstractFactory):
    def factory(self):
        return SimpleMeanRiskReturns()


class HistoryPriceNormalized(FormulatorAbstract):
    def calculate(self, df):
        try:
            normalized_price = round(df / df.iloc[0] * 100, 2)
            return normalized_price
        except Exception as err:
            raise RuntimeError('HistoryPriceNormalized formula failed')


class HistoryPriceNormalizedFactory(AbstractFactory):
    def factory(self):
        return HistoryPriceNormalized()


class Resampler(FormulatorAbstract):
    def calculate(self, df):
        try:
            df = df.head(1).append(
                df.loc[(df.index.day == 31) & (df.index.month == 12) | (df.index.day == 30) & (df.index.month == 6)])
            return df
        except Exception as err:
            raise RuntimeError('Resampler formula failed')

class ResamplerFactory(AbstractFactory):
    def factory(self):
        return Resampler()


class Divider:
    @staticmethod
    def divide(num1, num2, rounder=None):
        if rounder is not None:
            return round((num1 / num2) - 1,  rounder)
        else:
            return (num1 / num2) - 1

    @staticmethod
    def subtract(num1, num2, rounder=None):
        if rounder is not None:
            return round((num1 - num2),  rounder)
        else:
            return num1 - num2






