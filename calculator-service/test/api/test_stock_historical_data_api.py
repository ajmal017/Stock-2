from starlette.testclient import TestClient
from main import app
from test.setup.setup_data import setup_data_one_ticker
import pytest

client = TestClient(app)

@pytest.fixture
def setup():
    return setup_data_one_ticker()


def test_stock_historical_data_api_returns_200(setup):
    response = client.post('/stockHistorical', json=setup)
    assert response.status_code == 200
    print(response.json())
    assert response.json() == expected_response

def test_stock_historical_data_api_returns_422_not_data():
    response = client.post('/stockHistorical')
    assert response.status_code == 422





expected_response={
    'price_history': [{'GS': 55.82, 'date': '1999-05-04'}, {'GS': 57.31, 'date': '1999-06-30'}, {'GS': 75.01, 'date': '1999-12-31'}, {'GS': 75.69, 'date': '2000-06-30'},
                      {'GS': 74.63, 'date': '2001-12-31'}, {'GS': 55.24, 'date': '2002-12-31'}, {'GS': 68.15, 'date': '2003-06-30'}, {'GS': 80.81, 'date': '2003-12-31'},
                      {'GS': 77.45, 'date': '2004-06-30'}, {'GS': 86.05, 'date': '2004-12-31'}, {'GS': 84.79, 'date': '2005-06-30'}, {'GS': 126.07, 'date': '2006-06-30'},
                      {'GS': 182.21, 'date': '2007-12-31'}, {'GS': 148.73, 'date': '2008-06-30'}, {'GS': 72.12, 'date': '2008-12-31'}, {'GS': 127.02, 'date': '2009-06-30'},
                      {'GS': 146.08, 'date': '2009-12-31'}, {'GS': 114.11, 'date': '2010-06-30'}, {'GS': 146.87, 'date': '2010-12-31'}, {'GS': 116.79, 'date': '2011-06-30'},
                      {'GS': 114.57, 'date': '2012-12-31'}, {'GS': 161.31, 'date': '2013-12-31'}, {'GS': 153.41, 'date': '2014-06-30'}, {'GS': 178.71, 'date': '2014-12-31'},
                      {'GS': 193.71, 'date': '2015-06-30'}, {'GS': 168.36, 'date': '2015-12-31'}, {'GS': 139.97, 'date': '2016-06-30'}, {'GS': 211.77, 'date': '2017-06-30'},
                      {'GS': 162.68, 'date': '2018-12-31'}, {'GS': 228.53, 'date': '2019-12-31'}, {'GS': 138.41, 'date': '2020-03-20'}],
    'price_history_normalized': [{'GS': 100.0, 'date': '1999-05-04'}, {'GS': 102.67, 'date': '1999-06-30'}, {'GS': 134.38, 'date': '1999-12-31'}, {'GS': 135.6, 'date': '2000-06-30'},
                                 {'GS': 133.7, 'date': '2001-12-31'}, {'GS': 98.96, 'date': '2002-12-31'}, {'GS': 122.09, 'date': '2003-06-30'}, {'GS': 144.77, 'date': '2003-12-31'},
                                 {'GS': 138.75, 'date': '2004-06-30'}, {'GS': 154.16, 'date': '2004-12-31'}, {'GS': 151.9, 'date': '2005-06-30'}, {'GS': 225.85, 'date': '2006-06-30'},
                                 {'GS': 326.42, 'date': '2007-12-31'}, {'GS': 266.45, 'date': '2008-06-30'}, {'GS': 129.2, 'date': '2008-12-31'}, {'GS': 227.55, 'date': '2009-06-30'},
                                 {'GS': 261.7, 'date': '2009-12-31'}, {'GS': 204.42, 'date': '2010-06-30'}, {'GS': 263.11, 'date': '2010-12-31'}, {'GS': 209.23, 'date': '2011-06-30'},
                                 {'GS': 205.25, 'date': '2012-12-31'}, {'GS': 288.98, 'date': '2013-12-31'}, {'GS': 274.83, 'date': '2014-06-30'}, {'GS': 320.15, 'date': '2014-12-31'},
                                 {'GS': 347.03, 'date': '2015-06-30'}, {'GS': 301.61, 'date': '2015-12-31'}, {'GS': 250.75, 'date': '2016-06-30'}, {'GS': 379.38, 'date': '2017-06-30'},
                                 {'GS': 291.44, 'date': '2018-12-31'}, {'GS': 409.41, 'date': '2019-12-31'}, {'GS': 247.96, 'date': '2020-03-20'}]}


