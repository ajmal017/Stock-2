from pydantic import BaseModel
from typing import List, Dict


class FinancialMetricsOut(BaseModel):
    price_history: List[Dict] = []
    price_history_change: List[Dict] = []
    price_history_normalized: List[Dict] = []
    stock_annual_log_risk_return: List[Dict] = []
    symbols: List[str] = []


class FinancialMetricsIn(BaseModel):
    tickers: List[str] = []
