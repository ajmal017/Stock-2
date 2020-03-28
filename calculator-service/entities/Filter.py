from abc import ABC, abstractmethod
import logging
logger = logging.getLogger(__name__)

class FilterAbstract(ABC):
    @abstractmethod
    def filter(self, data, parameter): pass


class FilterAbstractFactory(ABC):
    @abstractmethod
    def factory(self): pass


class DataFilter(FilterAbstract):
    def filter(self, data, parameter):
        logger.info(f'filtering data for {parameter}')
        data = data[parameter]
        return data


class DataFilterFactory(FilterAbstractFactory):
    def factory(self):
        return DataFilter()
