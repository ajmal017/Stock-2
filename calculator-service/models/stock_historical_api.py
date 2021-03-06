from pydantic import BaseModel
from typing import List, Dict


class StockHistoricalResponse(BaseModel):
    price_history: List[Dict]
    price_history_normalized: List[Dict]
    rolling_volatility: List[Dict]
    cumulative_returns: List[Dict]
