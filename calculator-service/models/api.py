from pydantic import BaseModel
from typing import List, Dict


class FinancialMetricsOut(BaseModel):
    price_history: List[Dict] = []
    price_history_change: List[Dict] = []
    price_history_normalized: List[Dict] = []
    stock_annual_log_risk_return: List[Dict] = []
    portfolio_risk_returns: Dict = {}
    symbols: List[str] = []


class FinancialMetricsIn(BaseModel):
    tickers: List[str] = []


class StockHistoryIn(BaseModel):
    historicData: List[Dict] = []


class StockHistoryOut(BaseModel):
    price_history: List[Dict] = []
    price_history_normalized: List[Dict] = []


class StockMetricsOut(BaseModel):
    stock_annual_log_risk_return: List[Dict] = []


class PortfolioMetricsOut(BaseModel):
    portfolio_risk_returns: Dict = {}
