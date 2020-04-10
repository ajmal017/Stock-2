from entities.Abstracts import AbstractFactory
import pandas as pd
import numpy as np


class DataFrame:
    def __init__(self,):
        self._dataframe = None
        self._list_of_companies = None
        self._daily_log_returns = None
        self._annual_log_returns = None
        self._annual_log_volatility = None
        self._data = {}

    @property
    def dataframe(self):
        return self._dataframe

    @dataframe.setter
    def dataframe(self, df):
        self._dataframe = df
        self._list_of_companies = df.columns.tolist()

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

    def log_volatility(self):
        if self._annual_log_returns is None:
            df = self.annual_log_returns()[self._list_of_companies].std() ** 0.5
        else:
            df = self._annual_log_returns[self._list_of_companies].std() ** 0.5
        self._annual_log_volatility = df
        return df

    def weighted_log_returns(self, weights):
        if self._annual_log_returns is None:
            df = self.annual_log_returns()
        else:
            df = self._annual_log_returns
        result = np.sum(df * weights)
        return result

    def weighted_log_volatility(self, weights):
        if self._daily_log_returns is None:
            df = self.daily_log_returns()
        else:
            df = self._daily_log_returns
        result = np.sqrt(np.dot(weights.T, np.dot(df.cov() *250, weights)))
        return result

    def weighted_log_variance(self, weights):
        if self._daily_log_returns is None:
            df = self.daily_log_returns()
        else:
            df = self._daily_log_returns
        result = np.dot(weights.T, np.dot(df.cov() *250, weights))
        return result

    def systematic_idiosyncratic_risk(self, weights):
        stocks_risks = 0

        for i, stock in enumerate(self._list_of_companies):
            stock_variance = log_returns[stock].var() * 250
            calculation = weights[i] ** 2 * stock_variance
            stocks_risks += calculation

        portfolio_variance = self.weighted_log_variance(weights)
        idiosyncratic_risk = portfolio_variance - stocks_risks
        systematic_risk = portfolio_variance - idiosyncratic_risk

        idiosyncratic_risk = round(idiosyncratic_risk * 100, 3)
        systematic_risk = round(systematic_risk * 100, 3)
        portfolio_variance = round(portfolio_variance * 100, 3)

        return idiosyncratic_risk, systematic_risk, portfolio_variance

class DataFrameFactory(AbstractFactory):
    def factory(self):
        return DataFrame()