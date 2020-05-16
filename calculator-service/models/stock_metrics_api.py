from pydantic import BaseModel
from typing import List, Dict

class Entry(BaseModel):
    price_volatility: float
    ticker: str
    annual_mean_return: float

class StockMetricsResponse(BaseModel):
    stock_annual_log_risk_return: List[Entry]

