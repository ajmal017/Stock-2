from starlette.testclient import TestClient
from main import app
from test.setup.setup_data import setup_data_multiple_tickers
import pytest

client = TestClient(app)

@pytest.fixture
def setup():
    return setup_data_multiple_tickers()

def test_portfolio_metrics_api_returns_200(setup):
    response = client.post("/portfolioMetrics", json=setup)
    assert response.status_code == 200
    assert response.json() == response_data

def test_portfolio_metrics_api_returns_422_no_data():
    response = client.post("/portfolioMetrics")
    assert response.status_code == 422

response_data = {
    'portfolio_returns': 2.56,
    'portfolio_volatility': 37.57,
    'portfolio_returns_change': -0.1233,
    'portfolio_volatility_change': 0.0008,
    'sharpe_ratio': 6.82}
