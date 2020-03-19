from pydantic import BaseModel
from typing import List, Dict


class StockIn(BaseModel):
    ticker: str


class YfinanceHistory(BaseModel):
    open: float
    high: float
    low: float
    close: float
    volume: float
    dividends: float
    stock_splits: float
    date: str


class YfinanceOut(BaseModel):
    name: str
    history: YfinanceHistory


class WorldTradingHistory(BaseModel):
    open: float
    high: float
    low: float
    close: float
    volume: float
    date: str


class WordlTradingOut(BaseModel):
    name: str
    history: WorldTradingHistory
