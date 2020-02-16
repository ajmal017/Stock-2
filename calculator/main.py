from fastapi import FastAPI
from starlette.config import Config
from api import price

config = Config(".env")

app = FastAPI(debug='DEBUG', cas=bool, default=False)


# @app.get('/stock/{symbol}')
# async def simple_return(symbol):
#     stock = Pricer(symbol)
#     daily_close_price = stock.get_price()
#     return daily_close_price

app.include_router(price.router)
