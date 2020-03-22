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


def test_efficient_fronter_api_returns_200(setup_data):
    response = client.post("/efficientFrontier", json=setup_data)
    assert response.status_code == 200


def test_efficient_fronter_api_returns_400_no_data():
    response = client.post("efficientFrontier")
    assert response.status_code == 422
