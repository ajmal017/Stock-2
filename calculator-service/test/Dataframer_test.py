from entities.DataFramer import DataframerFactory, DataFramer
import pytest
import json
import pandas as pd


@pytest.fixture
def setup_instance():
    return DataframerFactory().factory()


def test_instance_should_type_class(setup_instance):
    assert isinstance(setup_instance, type(DataFramer))

