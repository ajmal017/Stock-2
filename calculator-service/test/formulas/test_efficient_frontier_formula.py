from entities.EfficientFrontier import EfficientFrontierSharpeFactory
from test.setup.setup_data import setup_df_with_GSPC
import pytest


@pytest.fixture
def setup():
    return setup_df_with_GSPC()


def test_efficient_frontier_returns_calculations_successfully(setup):
    formula = EfficientFrontierSharpeFactory().factory()
    results = formula.calculate(setup)
    assert results is not None
    assert len(results['frontier']) == 2000


def test_efficient_frontier_throws_no_data():
    formula = EfficientFrontierSharpeFactory().factory()
    with pytest.raises(Exception):
        formula.calculate()