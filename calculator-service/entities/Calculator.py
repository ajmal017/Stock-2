from abc import ABC, abstractmethod
from entities.Factory import AbstractFactory
import logging
logger = logging.getLogger(__name__)

class CalculatorAbstract(ABC):
    @abstractmethod
    def add_formula(self, component): pass

    @abstractmethod
    def add_data(self, data): pass

    @abstractmethod
    def calculate(self): pass


class Calculator(CalculatorAbstract):
    def __init__(self):
        self._data = None
        self._children = []

    def add_formula(self, component):
        self._children.append(component)

    def add_data(self, data):
        self._data = data

    def calculate(self):
        metrics = []
        for child in self._children:
            logger.info(f'calculator for child')
            metrics.append(child.calculate(self._data))
        return metrics


class CalculatorFactory(AbstractFactory):
    def factory(self):
        return Calculator()

