from fastapi import FastAPI
from starlette.config import Config
from starlette.middleware.cors import CORSMiddleware

from api import financial_metrics_resource, price

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


app.include_router(price.router)
app.include_router(financial_metrics_resource.router)
