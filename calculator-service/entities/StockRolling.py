from entities.Abstracts import AbstractFactory, FormulatorAbstract
from entities.Formulator import ResamplerFactory
from entities.utilities import DictionaryConverterFactory
import numpy as np

class StockRolling(FormulatorAbstract):
    def calculate(self, df):
        resampler = ResamplerFactory().factory()
        dictionary_converter = DictionaryConverterFactory().factory()
        log_returns = df.daily_log_returns()
        cumulative_returns = resampler.calculate(log_returns.cumsum().dropna(axis=0, how='any'))
        rolling_volatility =resampler.calculate((log_returns.rolling(42).std() * np.sqrt(42)).dropna(axis=0, how='any'))

        return {
            'rolling_volatility':dictionary_converter.convert_to_dictionary(rolling_volatility),
            'cumulative_returns':dictionary_converter.convert_to_dictionary(cumulative_returns)
        }



class StockRollingFactory(AbstractFactory):
    def factory(self):
        return StockRolling()