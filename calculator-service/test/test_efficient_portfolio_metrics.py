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
    return {"historicData": historicData}


def test_efficient_fronter_api_returns_200(setup_data):
    response = client.post("portfolioMetrics", json=setup_data)
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
