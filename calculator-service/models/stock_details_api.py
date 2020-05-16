from pydantic import BaseModel
from typing import List

class Entry(BaseModel):
    price: float
    price_change_value: float
    price_change_pct: float
    volume: float
    volume_change_value: float
    volume_change_pct: float
    beta: float
    ticker: str
    expected_returns: float
    alpha: float

class StockDetailsResponse(BaseModel):
    stock_details: List[Entry]

