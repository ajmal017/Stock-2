from fastapi import FastAPI
from starlette.config import Config
from starlette.middleware.cors import CORSMiddleware
from api import portfolio_metrics, stock_historical_data, stock_metrics, efficient_frontier, stock_details, stock_options, portfolio_analysis
import Logger
logger = Logger.getLogger(__name__)

config = Config(".env")

app = FastAPI(debug='DEBUG', cast=bool, default=False)


origins = [
    "http://localhost:3000",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# app.include_router(price.router)
app.include_router(stock_historical_data.router)
app.include_router(stock_metrics.router)
app.include_router(portfolio_metrics.router)
app.include_router(efficient_frontier.router)
app.include_router(stock_details.router)
app.include_router(stock_options.router)
app.include_router(portfolio_analysis.router)

logger.info('Calculator listening')

@app.on_event("shutdown")
def shutdown_event():
    logger.critical('Calculator shutting down')
