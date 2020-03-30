from starlette.testclient import TestClient
from main import app
from test.setup_data import setup_data, setup_df
import pytest
from entities.Formulator import SimpleMeanLogRiskReturnsFactory, HistoryPriceNormalizedFactory, ResamplerFactory
import pandas as pd


@pytest.fixture
def setup():
    return setup_df()


def test_annual_mean_log_risk_returns(setup):
    formula = SimpleMeanLogRiskReturnsFactory().factory()
    results = formula.calculate(setup)
    expected_results = [
        {
            "price_volatility": 37.41,
            "ticker": "GS",
            "annual_mean_return": 11.26
        }
    ]
    print(results)
    assert results == expected_results


def test_history_price_normalizer(setup):
    formula = HistoryPriceNormalizedFactory().factory()
    results = formula.calculate(setup)
    dictionary = results[:1].to_dict(orient='records')
    expected_results = [{'GS': 100.0}]
    assert dictionary == expected_results


def test_resampler(setup):
    formula = ResamplerFactory().factory()
    results = formula.calculate(setup)
    results['date'] = results.index.date
    dictionary = results.to_dict(orient='records')
    expected_results = [{'date': 2019-12-31, "GS": 409.41}]
