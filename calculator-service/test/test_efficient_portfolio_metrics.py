from starlette.testclient import TestClient
from main import app
from test.setup_data import setup_data
import pytest


client = TestClient(app)


@pytest.fixture
def setup():
    return setup_data()


def test_efficient_fronter_api_returns_200(setup):
    response = client.post("portfolioMetrics", json=setup)
    assert response.status_code == 200
    assert response.json() == response_data


def test_efficient_fronter_api_returns_422_no_data():
    response = client.post("portfolioMetrics")
    assert response.status_code == 422


response_data = {"portfolio_risk_returns": {
    "portfolio_returns": 11.226,
    "portfolio_volatility": 37.569,
    "portfolio_returns_change": -0.0302,
    "portfolio_volatility_change": 0.0009}
}
