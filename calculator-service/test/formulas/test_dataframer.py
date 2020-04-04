from entities.DataFramer import DataframerFactory
from test.setup.setup_data import setup_data_one_ticker
import pytest


@pytest.fixture
def setup():
    return setup_data_one_ticker()

def test_dataframer_returns_df(setup):
    data = setup['historicData'][0]['history']
    formula = DataframerFactory().factory()
    df = formula.create_dataframe(data)
    assert len(df.columns.tolist()) > 0
    assert df.shape[0] > 0
    assert df.shape[1] > 0


def test_daframer_throws_no_data():
    formula = DataframerFactory().factory()
    with pytest.raises(Exception):
        formula.create_dataframe()