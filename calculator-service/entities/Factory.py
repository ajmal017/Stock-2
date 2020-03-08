from abc import ABC, abstractmethod


class AbstractFactory(ABC):
    @abstractmethod
    def factory(self, *args): pass
