from pydantic import BaseModel
from typing import List, Dict

class Frontier(BaseModel):
    returns: float
    volatility: float
    sharpe_ratio: float
    weights: List[float]

class Distribution(BaseModel):
    ticker:str
    value:float


class EfficientFrontierResponse(BaseModel):
    frontier: List[Frontier]
    max_sharpe_portfolio: List[Frontier]
    max_sharpe_distribution: List[Distribution]
    min_volatility_portfolio: List[Frontier]
    min_volatility_distribution: List[Distribution]
    rolling_volatility: List[Dict]
    cumulative_returns: List[Dict]
