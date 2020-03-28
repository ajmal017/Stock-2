from typing import List
from fastapi import APIRouter, HTTPException
from requests import request
from models.api import StockIn, YfinanceOut, WordlTradingOut
import yfinance as yf
import logging
logger = logging.getLogger(__name__)

router = APIRouter()


@router.post('/stockYfinance')
async def calculate_financial_metrics(body: StockIn):
    try:
        logger.info(f'requesting data for ticker {body.ticker}')
        tick = yf.Ticker(body.ticker)
        df = tick.history(period='max')
        df.dropna(how='any', inplace=True)
        df.rename(columns={"Open": 'open',
                           "High": 'high',
                           "Low": 'low',
                           "Close": 'close',
                           "Volume": 'volume',
                           "Dividends": 'dividends',
                           "Stock Splits": 'stock_splits'}, inplace=True)


        return {'name': body.ticker, 'history': df.to_dict(orient='index')}

    except Exception as err:
        logger.error(f'Error requesting data for ticker {ticker}', err)
        raise HTTPException(status_code=400, detail=str(err))


@router.post('/stockWorldTradingApi')
async def get_stock(body: StockIn):
    try:
        print(f'requestin worldtrading api for {body.ticker}')
        base_url = 'https://api.worldtradingdata.com/api/v1/history'
        params = {
            'symbol': body.ticker,
            'api_token': 'aQpKQhT0CzMSf1ReEySVQCxvCY9XbMEOxjEQjHVoi11KJnN2bEwFAyfeivHy',
            'sort': 'oldest'
        }
        tick = request('GET', base_url, params=params).json()
        print(f'data pulled for {tick["name"]}')
        return tick

    except Exception as err:
        raise HTTPException(status_code=400, detail=str(err))
