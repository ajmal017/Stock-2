from fastapi import FastAPI
from starlette.config import Config
from starlette.middleware.cors import CORSMiddleware
import logging
from utils.redis import Redis

from api import pricer

config = Config(".env")

app = FastAPI(debug='DEBUG', cast=bool, default=False)

redis = Redis()

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
app.include_router(pricer.router)

logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', datefmt='%d/%m/%Y %I:%M:%S %p')
logging.info('Pricer listening')


@app.on_event("shutdown")
def shutdown_event():
    logger.critical('Pricer shutting down')
