from abc import ABC, abstractmethod


class AbstractFactory(ABC):
    @abstractmethod
    def factory(self, *args): pass


class FormulatorAbstract(ABC):
    @abstractmethod
    def calculate(self, df): pass

