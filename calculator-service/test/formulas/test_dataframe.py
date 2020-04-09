from entities.DataFrame import DataFrameFactory
from test.setup.setup_data import setup_df_with_GSPC
import pytest

@pytest.fixture
def dataframe():
    dataframe = DataFrameFactory().factory()
    dataframe.dataframe = setup_df_with_GSPC()
    return dataframe


def test_daily_simple_returns(dataframe):
    result = dataframe.daily_simple_returns()
    assert result.shape == (5255,2)

def test_annual_simple_returns(dataframe):
    result1, result2  = dataframe.annual_simple_returns()
    assert result1 == 0.1126284717004994
    assert result2 == 0.04502307243744686

def test_daily_log_returns(dataframe):
    result = dataframe.daily_log_returns()
    assert result.shape == (5255,2)

def test_annual_log_returns(dataframe):
    result1, result2  = dataframe.annual_log_returns()
    assert result1 == 0.04320936747242252
    assert result2 == 0.026092710152729407

def test_annual_simple_volatility(dataframe):
    result1, result2  = dataframe.annual_simple_volatility()
    assert result1 == 0.37408356621789657
    assert result2 == 0.19430695189838396

def test_annual_log_volatility(dataframe):
    result1, result2 = dataframe.annual_log_volatility()
    assert result1 == 0.3721444478544607
    assert result2 == 0.19475833893158512
