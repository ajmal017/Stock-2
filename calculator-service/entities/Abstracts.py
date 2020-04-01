from abc import ABC, abstractmethod

class FormulatorAbstract(ABC):
    @abstractmethod
    def calculate(self, df): pass

    from abc import ABC, abstractmethod

class AbstractFactory(ABC):
    @abstractmethod
    def factory(self, *args): pass
