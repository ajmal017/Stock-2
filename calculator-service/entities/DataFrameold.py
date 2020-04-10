from entities.Abstracts import AbstractFactory
import pandas as pd
import numpy as np


class DataFrame:
    def __init__(self,):
        self._dataframe = None
        self._list_of_companies = None
        self._daily_simple_returns = None
        self._annual_simple_returns = None
        self._daily_log_returns = None
        self._annual_log_returns = None
        self._annual_simple_volatility = None
        self._annual_log_volatility = None

    @property
    def dataframe(self):
        return self._dataframe

    @dataframe.setter
    def dataframe(self, df):
        self._dataframe = df
        self._list_of_companies = df.columns.tolist()

    def daily_simple_returns(self):
        df = self._dataframe.pct_change()
        self._daily_simple_returns = df
        return df

    def annual_simple_returns(self):
        if self._daily_simple_returns is not None:
            df = self._daily_simple_returns * 250
        else:
            df = self.daily_simple_returns().mean() * 250
        self._annual_simple_returns = df
        return df

    def daily_log_returns(self):
        df = np.log(self._dataframe/self._dataframe.shift(1))
        self._daily_log_returns = df
        return df

    def annual_log_returns(self):
        if self._daily_log_returns is not None:
            df = self._daily_log_returns.mean() * 250
        else:
            df = self.daily_log_returns().mean() * 250
        self._annual_log_returns = df
        return df

    def annual_simple_volatility(self):
        if self._annual_simple_returns is not None:
            df = self._annual_simple_returns[self._list_of_companies].std() ** 0.5
        elif self._daily_simple_returns is not None:
            df = self._daily_simple_returns[self._list_of_companies].std() * 250 ** 0.5
        else:
            df = self.daily_simple_returns()[self._list_of_companies].std() * 250 ** 0.5
        self._annual_simple_volatility = df
        return df

    def annual_log_volatility(self):
        if self._annual_log_returns is not None:
            df = self._annual_log_returns[self._list_of_companies].std() ** 0.5
        elif self._daily_log_returns is not None:
            df = self._daily_log_returns[self._list_of_companies].std() * 250 ** 0.5
        else:
            df = self.daily_log_returns()[self._list_of_companies].std() * 250 ** 0.5
        self._annual_log_volatility = df
        return df


class DataFrameFactory(AbstractFactory):
    def factory(self):
        return DataFrame()