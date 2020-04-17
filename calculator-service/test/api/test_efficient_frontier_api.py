from starlette.testclient import TestClient
from main import app
from test.setup.setup_data import setup_data_multiple_tickers
import pytest

client = TestClient(app)


@pytest.fixture
def setup():

    return setup_data_multiple_tickers()


def test_efficient_fronter_api_returns_200(setup):
    response = client.post("/efficientFrontier", json=setup)
    assert response.status_code == 200
    assert len(response.json()['frontier']) == 2000


def test_efficient_fronter_api_returns_400_no_data():
    response = client.post("efficientFrontier")
    assert response.status_code == 422
