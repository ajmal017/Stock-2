import pandas as pd
import numpy as np
import yfinance as yf


class DataFramer:
    def __init__(self, symbols):
        self.symbols = symbols
        self.symbols_as_str = self.get_symbols_as_str(symbols)
        self.df_daily = self.get_daily_dataFrame()
        self.log_returns_df = self.get_log_returns_dataframe()
        self.weights = self.get_weights()

    def get_symbols_as_str(self, symbols):
        result = ''
        for item in symbols:
            result += item + ' '
        return result

    def get_daily_dataFrame(self):
        df = pd.DataFrame()
        tickers = yf.Tickers(self.symbols_as_str)
        df = tickers.download(period='max')['Close']
        df.dropna(how='any', inplace=True)
        return df

    def resample_to_year(self, df):
        df = self.get_data('daily')
        annual_df = df.resample('Y').mean()
        return annual_df

    def set_index_date(self, df):
        df = self.df_daily
        df['year'] = df.index.year
        df = df.dropna(how='any').reset_index()
        df['Date'] = pd.to_datetime(df['Date']).dt.date
        df.set_index('Date', inplace=True)
        return df

    def get_data(self, format):
        if format == 'daily':
            return self.df_daily
        else:
            return None

    def get_log_returns_dataframe(self):
        df = self.get_data('daily')
        log_returns = np.log(df/df.shift(1))
        log_returns.dropna(inplace=True, how='any')

        return log_returns

    def get_stock_price_history(self):
        df = self.get_data('daily')
        df = self.resample_to_year(df)
        df = self.set_index_date(df)
        stock_price_history = df.reset_index().to_dict(orient='records')
        return stock_price_history

    def get_stock_price_history_normalized(self):
        df = self.get_data('daily')
        stock_price_history_normalized = (df / df.iloc[0] * 100).round(3)
        stock_price_history_normalized = self.resample_to_year(
            stock_price_history_normalized)
        stock_price_history_normalized = self.set_index_date(
            stock_price_history_normalized)
        stock_price_history_normalized = stock_price_history_normalized.reset_index(
        ).to_dict(orient='records')
        return stock_price_history_normalized

    def get_stock_price_history_change(self):
        df = self.get_data('daily')
        df = df.pct_change().fillna(value=0).resample('2Q').mean()
        stock_price_history_change = df.resample('2Q').mean().pct_change().fillna(value=0).round(3).reset_index().to_dict(orient='records')
        return stock_price_history_change

    def get_stocks_annual_log_risk_returns(self):
        risk = round(
            self.log_returns_df[self.symbols].std()**0.5*100, 2).tolist()
        returns = round(
            self.log_returns_df[self.symbols].mean()*100, 2).tolist()
        print(returns)
        data = []
        for index, symbol in enumerate(self.symbols):
            dictionary = {}
            dictionary['risk'] = risk[index]
            dictionary['symbol'] = symbol
            dictionary['return'] = returns[index]
            data.append(dictionary)
        return data

    def get_weights(self):
        ratio = 100/len(self.symbols)/100
        weights = np.array([])
        for symbol in self.symbols:
            weights = np.append(weights, [ratio])
        return weights
