from starlette.testclient import TestClient
from main import app
from test.setup.setup_data import setup_data_multiple_tickers
import pytest

client = TestClient(app)


@pytest.fixture
def setup():
    return setup_data_multiple_tickers()


def test_stock_options_api_returns_200(setup):
    response = client.post("/stockOptions", json=setup)
    assert response.status_code == 200
    assert response.json() == expected_response



def test_stock_options_api_returns_422_no_data():
    response = client.post("/stockOptions")
    assert response.status_code == 422


expected_response = {
    'option_prices': [
        {'name': 'GS', 'type': 'Call', 'price': 13.85, 'strike': 124.57}, {'name': 'BAC', 'type': 'Call', 'price': 1.97, 'strike': 17.7},
        {'name': 'GS', 'type': 'Call', 'price': 12.47, 'strike': 125.95}, {'name': 'BAC', 'type': 'Call', 'price': 1.77, 'strike': 17.9},
        {'name': 'GS', 'type': 'Call', 'price': 11.08, 'strike': 127.34}, {'name': 'BAC', 'type': 'Call', 'price': 1.57, 'strike': 18.1},
        {'name': 'GS', 'type': 'Call', 'price': 9.7, 'strike': 128.72}, {'name': 'BAC', 'type': 'Call', 'price': 1.38, 'strike': 18.29},
        {'name': 'GS', 'type': 'Call', 'price': 8.31, 'strike': 130.11}, {'name': 'BAC', 'type': 'Call', 'price': 1.18, 'strike': 18.49},
        {'name': 'GS', 'type': 'Call', 'price': 6.93, 'strike': 131.49}, {'name': 'BAC', 'type': 'Call', 'price': 0.98, 'strike': 18.69},
        {'name': 'GS', 'type': 'Call', 'price': 5.55, 'strike': 132.87}, {'name': 'BAC', 'type': 'Call', 'price': 0.79, 'strike': 18.88},
        {'name': 'GS', 'type': 'Call', 'price': 4.16, 'strike': 134.26}, {'name': 'BAC', 'type': 'Call', 'price': 0.59, 'strike': 19.08},
        {'name': 'GS', 'type': 'Call', 'price': 2.78, 'strike': 135.64}, {'name': 'BAC', 'type': 'Call', 'price': 0.39, 'strike': 19.28},
        {'name': 'GS', 'type': 'Call', 'price': 1.4, 'strike': 137.03}, {'name': 'BAC', 'type': 'Call', 'price': 0.2, 'strike': 19.47},
        {'name': 'GS', 'type': 'Call', 'price': 0.22, 'strike': 138.41}, {'name': 'BAC', 'type': 'Call', 'price': 0.04, 'strike': 19.67}
    ]
}
