from starlette.testclient import TestClient
from main import app
from test.setup_data import setup_data_multiple_tickers
import pytest

client = TestClient(app)


@pytest.fixture
def setup():
    return setup_data_multiple_tickers()


def test_stock_options_api_returns_200(setup):
    response = client.post("/stockOptions", json=setup)
    assert response.status_code == 200


def test_stock_options_api_returns_422_no_data():
    response = client.post("/stockOptions")
    assert response.status_code == 422


