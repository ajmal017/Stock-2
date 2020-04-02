from starlette.testclient import TestClient
from main import app
from test.setup_data import setup_data_one_ticker
import pytest

client = TestClient(app)

@pytest.fixture
def setup():
    return setup_data_one_ticker()


def test_stock_details_api_returns_200(setup):
    response = client.post('/stockDetails', json=setup)
    assert response.status_code == 200

def test_stock_details_api_returns_422_not_data():
    response = client.post('/stockDetails')
    assert response.status_code == 422
