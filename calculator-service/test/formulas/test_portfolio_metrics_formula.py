from entities.PortfolioMetrics import PortfolioRiskReturnFactory
from test.setup.setup_data import setup_df_with_GSPC
import pytest


@pytest.fixture
def setup():
    return setup_df_with_GSPC()


def test_portfolio_metrics_formula_returns_calculations_successfully(setup):
    formula = PortfolioRiskReturnFactory().factory()
    results = formula.calculate(setup)
    assert results == expected_results

def test_portfolio_metrics_formula_throws_no_data():
    formula = PortfolioRiskReturnFactory().factory()
    with pytest.raises(Exception):
        formula.calculate()


expected_results = {'portfolio_returns': 3.47,
        'portfolio_volatility': 26.54,
        'sharpe_ratio': 13.06}