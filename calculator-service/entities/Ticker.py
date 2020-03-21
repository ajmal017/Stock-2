from abc import ABC, abstractmethod
from entities.Factory import AbstractFactory


class TickerAbstract(ABC):
    @abstractmethod
    def get_ticker(self): pass


class Ticker(TickerAbstract):
    def __init__(self, ticker):
        self._dataframe = None
        self._ticker = self._validate_ticker(ticker)

    def get_ticker(self):
        return self._ticker

    def _validate_ticker(self, ticker):
        try:
            if not ticker or not isinstance(ticker, str):
                raise ValueError
            else:
                return ticker
        except Exception as error:
            return error

    @property
    def dataframe(self):
        return self._dataframe

    @dataframe.setter
    def dataframe(self, df):
        self._dataframe = df


class TickerFactory(AbstractFactory):
    def factory(self, ticker):
        return Ticker(ticker)
