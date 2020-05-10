from entities.Abstracts import AbstractFactory
import pandas as pd
import numpy as np
from utilities.decorators import try_except


class DataFrame:
    def __init__(self,):
        self._dataframe = None
        self._daily_simple_returns = None
        self._daily_log_returns = None
        self._annual_log_returns = None
        self._log_volatility = None
        self._data = {}

    @property
    def dataframe(self):
        return self._dataframe

    @dataframe.setter
    def dataframe(self, df):
        self._dataframe = df

    @try_except
    def columns_list(self):
        return self._dataframe.columns.tolist()

    @try_except
    def daily_simple_returns(self):
        df = self._dataframe.pct_change()[1:]
        self._daily_simple_returns = df
        return df

    @try_except
    def daily_log_returns(self):
        df = np.log(self._dataframe/self._dataframe.shift(1))
        self._daily_log_returns = df
        return df

    @try_except
    def annual_log_returns(self):
        list_of_companies = self.columns_list()
        if self._daily_log_returns is None:
            df = self.daily_log_returns()[list_of_companies].mean() * 250
        else:
            df = self._daily_log_returns[list_of_companies].mean() * 250
        result = df.tolist()
        self._annual_log_returns = result
        return result

    @try_except
    def log_volatility(self):
        list_of_companies = self.columns_list()
        if self._daily_log_returns is None:
            df = self.daily_log_returns()[list_of_companies].std() * 250 ** 0.5
        else:
            df = self._daily_log_returns[list_of_companies].std() * 250 ** 0.5
        result = df.tolist()
        self._log_volatility = result
        return result


    @try_except
    def weighted_log_returns(self, weights):
        if self._annual_log_returns is None:
            df = self.annual_log_returns()
        else:
            df = self._annual_log_returns
        result = np.sum(df * weights)
        return result

    @try_except
    def weighted_log_volatility(self, weights):
        if self._daily_log_returns is None:
            df = self.daily_log_returns()
        else:
            df = self._daily_log_returns
        result = np.sqrt(np.dot(weights.T, np.dot(df.cov() *250, weights)))
        return result

    @try_except
    def weighted_log_variance(self, weights):
        if self._daily_log_returns is None:
            df = self.daily_log_returns()
        else:
            df = self._daily_log_returns
        result = np.dot(weights.T, np.dot(df.cov() *250, weights))
        return result

    @try_except
    def change_last_day(self):
        today = self._dataframe.iloc[-1].values
        yesterday = self._dataframe.iloc[-2].values
        value = today - yesterday
        change = ((today/yesterday) - 1) * 100
        return value, change

    @try_except
    def systematic_idiosyncratic_risk(self, weights):
        stocks_risks = 0
        companies = self.columns_list()
        for i, stock in enumerate(companies):
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