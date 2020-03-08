# from fastapi import APIRouter, HTTPException
# from pydantic import BaseModel
# from typing import List
# import pandas as pd
# import numpy as np
# from utils import requester
# from utils import framer

# router = APIRouter()


# class Symbols(BaseModel):
#     symbols: List[str] = []


# @router.get('/stockPrice/{symbol}')
# async def get_price(symbol: str):
#     try:
#         r = requester.Requester()
#         response = r.get_stock_price(symbol)
#         data = response['historical'][-1]
#         data['symbol'] = symbol
#         return {symbol: data}
#     except Exception as err:
#         raise HTTPException(status_code=400, detail=str(err))


# @router.post('/stockPriceHistory')
# async def get_price_history(body: Symbols):
#     try:
#         symbols = body.symbols
#         df = pd.DataFrame()
#         r = requester.Requester()
#         for symbol in symbols:
#             response = r.get_stock_price(symbol)
#             df[symbol] = pd.DataFrame(
#                 response['historical']).set_index('date')['close']

#         data = df.reset_index().to_dict(orient='records')

#         return data
#     except Exception as err:
#         raise HTTPException(status_code=400, detail=str(err))


# @router.post('/stockPriceChange')
# async def get_price_change(body: Symbols):
#     try:
#         symbols = body.symbols
#         df = pd.DataFrame()
#         r = requester.Requester()
#         for symbol in symbols:
#             response = r.get_stock_price(symbol)
#             df[symbol] = pd.DataFrame(response['historical']).set_index('date')[
#                 'close'].pct_change()
#         df.dropna(axis=0, how='any', inplace=True)
#         df = df.round(3)
#         data = df.reset_index().to_dict(orient='records')
#         return data
#     except Exception as err:
#         raise HTTPException(status_code=400, details=str(err))


# @router.post('/stockRiskReturn')
# async def get_risk_return(body: Symbols):
#     try:
#         symbols = body.symbols
#         df = pd.DataFrame()
#         r = requester.Requester()
#         for symbol in symbols:
#             response = r.get_stock_price(symbol)
#             df[symbol] = pd.DataFrame(
#                 response['historical']).set_index('date')['close']

#         sec_returns = np.log(df/df.shift(1))
#         sec_returns.dropna(inplace=True)
#         risk = round((sec_returns[symbols].std()*250**0.5*100), 2).tolist()
#         returns = round((sec_returns[symbols].mean()*252*100), 2).tolist()
#         data = []
#         for index, symbol in enumerate(symbols):
#             dictionary = {}
#             dictionary['risk'] = risk[index]
#             dictionary['symbol'] = symbol
#             dictionary['return'] = returns[index]
#             data.append(dictionary)
#         return data
#     except Exception as err:
#         raise HTTPException(status_code=400, details=str(err))


# @router.post('/portfolioRiskReturn')
# def get_portfolio_risk_return(body: Symbols):
#     symbols = body.symbols
#     df = pd.DataFrame()
#     r = requester.Requester()
#     for symbol in symbols:
#         response = r.get_stock_price(symbol)
#         df[symbol] = pd.DataFrame(
#             response['historical']).set_index('date')['close']
#     returns = (df/df.shift(1))-1
#     ratio = 100/len(symbols)/100
#     weights = np.array([])
#     for symbol in symbols:
#         weights = np.append(weights, [ratio])
#     annual_returns = returns.mean()*252
#     portfolio = (round(np.dot(annual_returns, weights), 5) * 100)
#     sec_returns = np.log(df/df.shift(1))
#     portfolio_volatility = (np.dot(weights.T, np.dot(
#         sec_returns.cov() * 250, weights))) ** 0.5


# @router.post('/stockMetrics')
# def get_financial_metrics(body: Symbols):
#     df = framer.DataFramer(body.symbols)
#     price_history = df.get_stock_price_history()
#     # price_history_change = df.get_stock_price_history_change()
#     # price_history_normalized = df.get_stock_price_history_normalized()
#     # stock_annual_log_risk_return = df.get_stocks_annual_log_risk_returns()
#     symbols = body.symbols

#     return{
#         'price_history': price_history,
#         # 'price_history_change': price_history_change,
#         # 'price_history_normalized': price_history_normalized,
#         # 'stock_annual_log_risk_return': stock_annual_log_risk_return,
#         'symbols': symbols
#     }
