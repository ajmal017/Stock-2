import numpy as np
import pandas as pd
from scipy.stats import norm, linregress
from entities.Abstracts import AbstractFactory, FormulatorAbstract


class BetaRegression(FormulatorAbstract):
    def calculate(self, df):
        try:
            list_stocks = df.columns.tolist()
            returns = df.pct_change().dropna(how='any')
            stock_returns = returns[list_stocks[0]]
            index = returns['^GSPC']
            (beta, alpha) = linregress(index, stock_returns)[:2]
            return {'beta':beta, 'alpha':alpha}
        except Exception as err:
            raise RuntimeError('Beta Formula with regression failed')


class BetaFactory(AbstractFactory):
    def factory(self):
        return BetaRegression()
