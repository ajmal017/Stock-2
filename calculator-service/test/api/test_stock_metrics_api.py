from starlette.testclient import TestClient
from main import app
from test.setup.setup_data import setup_data_multiple_tickers
import pytest

client = TestClient(app)


@pytest.fixture
def setup():
    return setup_data_multiple_tickers()


def test_stock_metrics_api_returns_200(setup):
    response = client.post("/stockMetrics", json=setup)
    assert response.status_code == 200
    print(response.json())
    assert response.json() == response_data


def test_stock_metrics_api_returns_422_no_data():
    response = client.post("/stockMetrics")
    assert response.status_code == 422


response_data = {'stock_annual_log_risk_return': [
    {
        "price_volatility": 37.21,
        "ticker": "GS",
        "annual_mean_return": 4.32
    },
    {
        "price_volatility": 45.61,
        "ticker": "BAC",
        "annual_mean_return": 0.8
    }
]}
