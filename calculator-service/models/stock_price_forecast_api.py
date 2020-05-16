from pydantic import BaseModel
from typing import List, Dict

class EfficientFrontierResponse(BaseModel):
    frontier: List[Dict]
    max_sharpe_portfolio: List[Dict]
    max_sharpe_distribution: List[Dict]
    min_volatility_portfolio: List[Dict]
    min_volatility_distribution: List[Dict]
    rolling_volatility: List[Dict]
    cumulative_returns: List[Dict]
