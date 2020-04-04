from entities.Ticker import TickerFactory
from test.setup.setup_data import setup_data_one_ticker
import pytest


@pytest.fixture
def setup():
    return setup_data_one_ticker()

def test_dataframer_returns_df(setup):
    data = setup['historicData'][0]
    ticker = TickerFactory().factory(data['name'])
    assert ticker.get_ticker() is not None
    assert ticker.get_ticker() == 'GS'


def test_daframer_throws_no_data():
    with pytest.raises(Exception):
        TickerFactory().factory()
