from starlette.testclient import TestClient
from main import app

client = TestClient(app)


def test_simple_return():
    response = client.get('/stocl/AAPL')
    assert response.status_code == 200
