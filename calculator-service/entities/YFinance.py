import yfinance as yf


class FinanceDataPuller:
    @staticmethod
    def get_data(ticker):
        tick = yf.Ticker(ticker)
        df = tick.history(period='max')
        return df
