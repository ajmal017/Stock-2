from abc import ABC, abstractmethod
from entities.Factory import AbstractFactory
import logging

logger = logging.getLogger(__name__)

class FilterAbstract(ABC):
    @abstractmethod
    def filter(self, data, parameter): pass


class DataFilter(FilterAbstract):
    def filter(self, data, parameter):
        try:
            data = data[parameter]
            return data
        except Exception as err:
            raise err


class DataFilterFactory(AbstractFactory):
    def factory(self):
        return DataFilter()
