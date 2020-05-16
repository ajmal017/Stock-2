from pydantic import BaseModel
from typing import List, Dict




class PortfolioMetricsResponse(BaseModel):
    portfolio_returns: float
    portfolio_volatility: float
    sharpe_ratio: float
    portfolio_returns_change: float
    portfolio_volatility_change: float
