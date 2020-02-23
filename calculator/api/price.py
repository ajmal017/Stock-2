from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List
import pandas as pd
from utils import requester

router = APIRouter()

class Symbols(BaseModel):
    symbols: List[str] = []


@router.get('/stockPrice/{symbol}')
async def get_price(symbol:str):
    try:
        r = requester.Requester()
        response = r.get_stock_price(symbol)
        data = response['historical'][-1]
        data['symbol'] = symbol
        return {symbol:data}
    except Exception as err:
        raise HTTPException(status_code=400, detail=str(err))

@router.post('/stockPriceHistory')
async def get_price_history(body:Symbols):
    try:
        symbols = body.symbols
        df=pd.DataFrame()
        r = requester.Requester()
        for symbol in symbols:
            response = r.get_stock_price(symbol)
            df[symbol] = pd.DataFrame(response['historical']).set_index('date')['close']
            
        data = df.reset_index().to_dict(orient='records')
        
        return data
    except Exception as err:
        raise HTTPException(status_code=400, detail=str(err))


@router.post('/stockPriceChange')
async def get_price_change(body:Symbols):
    try:
        symbols=body.symbols
        df=pd.DataFrame()
        r = requester.Requester()
        for symbol in symbols:
            response = r.get_stock_price(symbol)
            df[symbol]=pd.DataFrame(response['historical']).set_index('date')['close'].pct_change()
        df.dropna(axis=0,how='any',inplace=True)
        df = df.round(3)
        data = df.reset_index().to_dict(orient='records')
        return data
    except Exception as err:
        raise HTTPException(status_code=400, details=str(err))

    
# @router.get('/stock/{symbol}')
# async def get_price(symbol: str):
#     try:
#         r = requester.Requester()
#         data =r.get_stock_price(symbol)
    

#         df = pd.DataFrame(data['historical'])
#         df['date'] = pd.to_datetime(df['date'])
#         df['daily_return'] = (df['close']/df['close'].shift(1))-1
#         df['pct_daily_change'] = df['close'].pct_change()
#         annual_return = round(df['daily_return'].mean() * 250, 3)

#         return {
#             'annual_return': annual_return,
#             'company': symbol,
#             'daily_closing_price': list(df['close']),
#             'trading_dates': list(df['date'].dt.date),
#             'volume':list(df['volume'])
#         }        
#     except Exception as err:
#         print(err)
#         raise HTTPException(status_code=400, detail=str(err))
