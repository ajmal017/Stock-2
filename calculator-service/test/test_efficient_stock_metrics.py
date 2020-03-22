from starlette.testclient import TestClient
from main import app
from test.data import data
import pytest
import json
import os

base_dir = os.path.dirname(__file__)

client = TestClient(app)


@pytest.fixture
def setup_data():
    historicData = []
    files = ['GS.json', 'BAC.json']
    for f in files:
        path = os.path.join(base_dir, f)
        print(path)
        with open(path) as json_file:
            historicData.append(json.load(json_file))
    print('parsin json files finished')
    return {"historicData": historicData}


def test_portfolio_metrics_api_returns_200(setup_data):
    response = client.post("/stockMetrics", json=setup_data)
    assert response.status_code == 200
    assert response.json() == response_data


def test_portfolio_metrics_api_returns_422_no_data():
    response = client.post("/stockMetrics")
    assert response.status_code == 422


response_data = {'stock_annual_log_risk_return': [
    {
        "price_volatility": 37.408,
        "ticker": "GS",
        "annual_mean_return": 11.263
    },
    {
        "price_volatility": 45.69,
        "ticker": "BAC",
        "annual_mean_return": 11.189
    }
]}
