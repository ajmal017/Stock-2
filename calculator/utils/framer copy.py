import pandas as pd
import numpy as np

class DataFramer:
    def __init__(self,symbols,requester):
        self.symbols = symbols
        self.requester = requester
        self.df = self.get_dataFrame()
        self.log_returns_df = self.get_log_returns_dataframe()
        self.weights = self.get_weights()
    
    def get_dataFrame(self):
        df=pd.DataFrame()
        for symbol in self.symbols:
            response = self.requester.get_stock_price(symbol)
            df[symbol]=pd.DataFrame(response['historical']).set_index('date')['close']
        return df

    def get_log_returns_dataframe(self):
        log_returns = np.log(self.df/self.df.shift(1))
        log_returns.dropna(inplace=True,how='any')
        return log_returns 

    def get_stock_price_history(self):
        stock_price_history = self.df.reset_index().to_dict(orient='records')
        return stock_price_history

    def get_stock_price_history_change(self):
        stock_price_history_change = self.df.pct_change().dropna(axis=0,how='any').round(3).reset_index().to_dict(orient='records')
        return stock_price_history_change
     
    
    def get_stocks_annual_log_risk_returns(self):
        risk = round((self.log_returns_df[self.symbols].std()*250**0.5*100),2).tolist()
        returns = round((self.log_returns_df[self.symbols].mean()*252*100),2).tolist()
        data = []
        for index,symbol in enumerate(self.symbols):
            dictionary = {}
            dictionary['risk']=risk[index]
            dictionary['symbol']=symbol
            dictionary['return']=returns[index]
            data.append(dictionary)
        return data
    
    def get_weights(self):
        ratio = 100/len(self.symbols)/100
        weights=np.array([])
        for symbol in self.symbols:
            weights= np.append(weights,[ratio])
        return weights






        


