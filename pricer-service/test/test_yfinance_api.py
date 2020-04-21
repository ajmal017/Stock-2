from starlette.testclient import TestClient
from main import app
import pytest

client = TestClient(app)

@pytest.fixture
def setup():
    return {'ticker':'GS'}

def test_Yfinance_api_returns_200(setup):
    response = client.post("/stockYfinance", json=setup)
    assert response.status_code == 200
    assert response.json()['name'] == 'GS'
    assert response.json()['history'] is not None


def test_Yfinance_api_returns_400_as_ticker_not_found():
    response = client.post('/stockYfinance', json={'ticker':'non_existant'})
    assert response.status_code == 400


def test_Yfinance_api_returns_422():
    response = client.post('stockYfinance')
    assert response.status_code == 422
