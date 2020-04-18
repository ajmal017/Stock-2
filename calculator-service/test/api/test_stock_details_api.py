from starlette.testclient import TestClient
from main import app
from test.setup.setup_data import setup_data_with_GSPC
import pytest

client = TestClient(app)

@pytest.fixture
def setup():
    return setup_data_with_GSPC()


def test_stock_details_api_returns_200(setup):
    response = client.post('/stockDetails', json=setup)
    assert response.status_code == 200
    print(response.json())
    assert response.json() == expected_response

def test_stock_details_api_returns_422_not_data():
    response = client.post('/stockDetails')
    assert response.status_code == 422


expected_response = {'stock_details': [
    {'price': 138.41, 'price_change_value': -11.08,
    'price_change_pct': -7.4119, 'volume': 7558700.0,
    'volume_change_value': 1010500.0, 'volume_change_pct': 15.4317,
    'beta': 1.28, 'ticker': 'GS', 'expected_returns': 0.8939,
    'alpha': 0}
]}
