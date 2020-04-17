from starlette.testclient import TestClient
from main import app
from test.setup.setup_data import setup_df
import pytest
from entities.Formulator import HistoryPriceNormalizedFactory, ResamplerFactory
from entities.StockMetrics import StockRiskReturnsFactory
import pandas as pd


@pytest.fixture
def setup():
    return setup_df()


def test_stock_metrics_formula(setup):
    formula = StockRiskReturnsFactory().factory()
    results = formula.calculate(setup)
    expected_results = [
        {
            "price_volatility": 37.21,
            "ticker": "GS",
            "annual_mean_return": 4.32
        }
    ]
    assert results == expected_results


def test_history_price_normalizer(setup):
    formula = HistoryPriceNormalizedFactory().factory()
    results = formula.calculate(setup)
    dictionary = results[:1].to_dict(orient='records')
    expected_results = [{'GS': 100.0}]
    assert dictionary == expected_results


def test_resampler(setup):
    formula = ResamplerFactory().factory()
    results = formula.calculate(setup.dataframe)
    results['date'] = results.index.date
    dictionary = results.to_dict(orient='records')
    expected_results = [{'date': 2019-12-31, "GS": 409.41}]
