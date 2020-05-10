from abc import abstractmethod, ABC
import numpy as np
import pandas as pd
from scipy.stats import norm, linregress
from entities.Abstracts import AbstractFactory, FormulatorAbstract


class HistoryPriceNormalized(FormulatorAbstract):
    def calculate(self, df):
        try:
            normalized_price = round(df.dataframe / df.dataframe.iloc[0] * 100, 2)
            return normalized_price
        except Exception as err:
            raise RuntimeError(f'HistoryPriceNormalized formula failed - {err}')


class HistoryPriceNormalizedFactory(AbstractFactory):
    def factory(self):
        return HistoryPriceNormalized()


class Resampler(FormulatorAbstract):
    def calculate(self, df):
        try:
            result = df.head(1).append(
                df.loc[
                    (df.index.day == 31) & (df.index.month == 12) |
                    (df.index.day == 30) & (df.index.month == 6)
                ]
            )
            result = result.append(df.tail(1))
            return result
        except Exception as err:
            raise RuntimeError(f'Resampler formula failed - {err}')

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






