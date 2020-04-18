from test.setup.setup_data import setup_df_with_GSPC
from entities.Beta import BetaFactory
import pytest

@pytest.fixture
def setup():
    return setup_df_with_GSPC()


def test_beta_formula_returns_beta_value(setup):
    beta_formula = BetaFactory().factory()
    result = beta_formula.calculate(setup)
    print(result)
    assert result['beta'] == 1.2789369706980658
    assert result['alpha'] == 0


def test_beta_formula_returns_throws():
    beta_formula = BetaFactory().factory()
    with pytest.raises(Exception):
        beta_formula.calculate()


