from abc import ABC, abstractmethod
from enum import Enum
from datetime import date, datetime
import time

class Urls(Enum):
    STOCK_PRICE = 'https://financialmodelingprep.com/api/v3/historical-price-full'
    VOLUME_PRICE = 'https://financialmodelingprep.com/api/v3/volume-price-full'
    API_KEY = 'aQpKQhT0CzMSf1ReEySVQCxvCY9XbMEOxjEQjHVoi11KJnN2bEwFAyfeivHy'


class UrlCreatorAbstract(ABC):
    @abstractmethod
    def create_url(self): pass


class UrlCreateAbstractFactory(ABC):
    @abstractmethod
    def factory(self, ticker): pass


class UrlPriceCreator(UrlCreatorAbstract):
    def __init__(self, ticker):
        self._ticker = ticker

    def create_url(self):
        # return f'https://finnhub.io/api/v1/stock/candle?symbol={self._ticker}&resolution=1&from={from_date}&to={
        # to_date}&token={Urls.API_KEY.value}'
        return f'https://api.worldtradingdata.com/api/v1/history?symbol={self._ticker}&api_token={Urls.API_KEY.value}'


class UrlPriceCreatorFactory(UrlCreateAbstractFactory):
    def factory(self, ticker):
        return UrlPriceCreator(ticker)
