from entities.Abstracts import AbstractFactory, FormulatorAbstract
from utilities.decorators import try_except
from entities.DataFrame import DataFrameFactory
import numpy as np

class StockRiskReturns(FormulatorAbstract):
    @try_except
    def calculate(self, df):
        dataframe = DataFrameFactory().factory()
        dataframe.dataframe = df
        companies = dataframe.columns_list()
        price_volatility =  dataframe.log_volatility()
        returns = dataframe.annual_log_returns()

        data = []

        for index, ticker in enumerate(companies):
            dictionary = {
                'price_volatility': round(price_volatility[index] * 100, 2), 'ticker': ticker,
                'annual_mean_return': round(returns[index] * 100, 2)}
            data.append(dictionary)
        return data

class StockRiskReturnsFactory(AbstractFactory):
    def factory(self):
        return StockRiskReturns()
