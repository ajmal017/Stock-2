from pydantic import BaseModel
from typing import List, Dict


class Entry(BaseModel):
    name: str
    type: str
    price: float
    strike: float


class StockOptionsResponse(BaseModel):
    option_prices: List[Entry]

