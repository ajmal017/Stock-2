import requests


class Pricer:
    def __init__(self, symbol):
        self.symbol = symbol
        self.closing_price = []
        self.risk = None

    def get_price(self):
        res = requests.get(
            f'https://financialmodelingprep.com/api/v3/historical-price-full/{self.symbol}?serietype=line')
        return res
