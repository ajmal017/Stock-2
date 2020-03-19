from pydantic import BaseModel
from typing import List, Dict


class StockOut(BaseModel):
    price_history: List[Dict] = []
    price_history_change: List[Dict] = []
    price_history_normalized: List[Dict] = []
    stock_annual_log_risk_return: List[Dict] = []
    portfolio_risk_returns: Dict = {}
    symbols: List[str] = []


class StockIn(BaseModel):
    ticker: str
