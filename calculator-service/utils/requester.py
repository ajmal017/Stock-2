import requests


class Requester:
    def __init__(self):
        self.requests = requests

    def get_stock_price(self, symbol):
        try:
            if not symbol:
                print(f'stock price requested for {symbol}')
                raise ValueError('Symbol not passed to get_stock_price')
            r = self.requests.get(f'{Urls.STOCK_PRICE}/{symbol}')
            r.raise_for_status()
        except Exception as err:
            raise err
        else:
            return r.json()
