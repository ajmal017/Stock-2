import numpy as np
import pandas as pd
from scipy.stats import norm, linregress
from entities.Abstracts import AbstractFactory, FormulatorAbstract
import datetime


class BetaRegression(FormulatorAbstract):
    def calculate(self, df):
        try:
            list_stocks = df.columns_list()
            df.dataframe = df.dataframe.loc[datetime.date(year=2014,month=1,day=1):datetime.date.today()]
            returns = df.daily_simple_returns()
            stock_returns = returns[list_stocks[0]]
            index = returns['^GSPC']
            (beta, alpha) = linregress(index, stock_returns)[:2]
            return {'beta':beta, 'alpha':alpha}
        except Exception as err:
            raise RuntimeError(f'Beta Formula with regression failed, {err}')


class Beta(FormulatorAbstract):
    def calculate(self, df):
        try:
            df.dataframe = df.dataframe.loc[datetime.date(year=2014,month=1,day=1):datetime.date.today()]
            sec_returns = df.daily_log_returns()
            cov = sec_returns.cov() * 250
            cov_with_market = cov.iloc[0,1]
            market_var = sec_returns['^GSPC'].var() * 250
            beta = cov_with_market / market_var
            return {'beta':beta, 'alpha':0}
        except Exception as err:
            raise RuntimeError(f'Beta Formula failed, {err}')


class BetaFactory(AbstractFactory):
    def factory(self):
        return Beta()
