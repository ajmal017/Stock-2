import numpy as np
import pandas as pd
from entities.Abstracts import AbstractFactory, FormulatorAbstract


class EqualWeightMaker(FormulatorAbstract):
    def calculate(self, number_of_tickers):
        try:
            ratio = 1/number_of_tickers
            weights = np.array([])
            for i in range(number_of_tickers):
                weights = np.append(weights, ratio)
            weights /= np.sum(weights)
            return weights
        except Exception as err:
            raise RuntimeError(f'EqualWeightMaker formula failed {err}')


class EqualWeightMakerFactory(AbstractFactory):
    def factory(self):
        return EqualWeightMaker()