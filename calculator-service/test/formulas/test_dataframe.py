from entities.DataFrame import DataFrameFactory
from test.setup.setup_data import setup_df_with_GSPC
import numpy as np
import pytest

@pytest.fixture
def dataframe():
    return setup_df_with_GSPC()

weights = np.array([0.3, 0.7])


def test_columns_list(dataframe):
    result = dataframe.columns_list()
    assert result == ['GS', '^GSPC']

def test_daily_simple_returns(dataframe):
    result = dataframe.daily_simple_returns()
    assert result.shape == (5254,2)

def test_daily_log_returns(dataframe):
    result = dataframe.daily_log_returns()
    assert result.shape == (5255,2)

def test_annual_log_returns(dataframe):
    result1, result2  = dataframe.annual_log_returns()
    assert result1 == 0.04320936747242252
    assert result2 == 0.026092710152729407

def test_log_volatility(dataframe):
    result1, result2 = dataframe.log_volatility()
    assert result1 == 0.3721444478544607
    assert result2 == 0.19475833893158512

def test_weighted_log_returns(dataframe):
    result = dataframe.weighted_log_returns(weights)
    assert result == 0.03122770734863734

def test_weighted_log_volatility(dataframe):
    result = dataframe.weighted_log_volatility(weights)
    assert result == 0.2305910029680196

def test_weighted_log_variance(dataframe):
    result = dataframe.weighted_log_variance(weights)
    assert result == 0.05317221064979723

def test_change_last_day(dataframe):
    value, change = dataframe.change_last_day()
    assert len(value) == 2
    assert len(change) == 2
