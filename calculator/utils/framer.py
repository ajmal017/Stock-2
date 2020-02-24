import pandas as pd
import numpy as np

class DataFramer:
    def __init__(self,symbols,requester):
        self.symbols = symbols
        self.requester = requester
        self.df = self.get_dataFrame()
        self.log_returns_df = self.get_log_returns_dataframe()
        self.simple_returns_df = self.get_simple_returns_dataframe()
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

    def get_simple_returns_dataframe(self):
        simple_returns = (self.df/self.df.shift(1)-1)
        simple_returns.dropna(inplace=True, how='any')
        return simple_returns
        
    def get_stock_price_history(self):
        stock_price_history = self.df.reset_index().to_dict(orient='records')
        return stock_price_history

    def get_stock_price_history_change(self):
        stock_price_history_change = self.df.pct_change().dropna(axis=0,how='any').round(3).reset_index().to_dict(orient='records')
        return stock_price_history_change,3
     
    
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


    def get_stock_annual_log_returns(self):
        annual_log_returns = self.log_returns_df[self.symbols].mean()*252
        return annual_log_returns

    def get_stock_annual_symple_returns(self):
        annual_simple_returns = self.simple_returns_df[self.symbols].mean()*252
        return annual_simple_returns

    def get_stock_log_risk(self):
        equity_risk = self.log_returns_df[self.symbols].std()*250**0.5
        rounded_risk = round(equity_risk,2)
        return rounded_risk
    
    def portfolio_returns(self,annual_returns):
        # it accepts the simple return dataframe
        weights=get_weights()
        portfolio_ret= (round(np.dot(annual_returns, self.rounderweights), 5) * 100)
        return portfolio_ret

    def portfolio_risk(self,df):
        weights=get_weights()
        portfolio_volatility = (np.dot(weights.T, np.dot(self.log_returns_df.cov() * 250, weights))) ** 0.5
        return portfolio_volatility

    def get_weights(self):
        ratio = 100/len(self.symbols)/100
        weights=np.array([])
        for symbol in self.symbols:
            weights= np.append(weights,[ratio])
        return weights

    def rounder(self,num,decimals):
        result = round(num,decimals)
        return result






        


