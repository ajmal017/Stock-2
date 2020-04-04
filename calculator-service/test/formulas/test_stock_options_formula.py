from entities.StockOptions import OptionsPricerFactory
from test.setup.setup_data import setup_df
import pytest

@pytest.fixture
def setup():
    return setup_df()


def test_stock_options_returns_list_prices(setup):
    formula = OptionsPricerFactory().factory()
    results = formula.calculate(setup)
    assert results is not None
    assert len(results) > 0


def test_stock_options_throws_not_data():
    formula = OptionsPricerFactory().factory()
    with pytest.raises(Exception):
        formula.calculate()