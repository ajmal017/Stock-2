from typing import List
from fastapi import APIRouter, HTTPException
from requests import request

from models.api import StockIn, StockOut
import yfinance as yf

router = APIRouter()


@router.post('/stock',)
async def calculate_financial_metrics(body: StockIn):
    try:
        tick = yf.Ticker(body.ticker)
        df = tick.history(period='max')

        return df.to_dict(orient='index')

    except Exception as err:
        raise HTTPException(status_code=400, detail=str(err))


@router.post('/stockWorldTradingApi')
async def get_stock(body: StockIn):
    try:
        base_url = 'https://api.worldtradingdata.com/api/v1/history'
        params = {
            'symbol': body.ticker,
            'api_token': 'aQpKQhT0CzMSf1ReEySVQCxvCY9XbMEOxjEQjHVoi11KJnN2bEwFAyfeivHy',
            'sort': 'oldest'
        }
        tick = request('GET', base_url, params=params).json()
        return tick['history']

    except Exception as err:
        print(err)
        raise HTTPException(status_code=400, detail=str(err))
