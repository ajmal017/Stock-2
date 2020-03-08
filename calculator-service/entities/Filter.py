from abc import ABC, abstractmethod


class FilterAbstract(ABC):
    @abstractmethod
    def filter(self, data, parameter): pass


class FilterAbstractFactory(ABC):
    @abstractmethod
    def factory(self): pass


class HistoricalDataFilter(FilterAbstract):
    def filter(self, data, parameter):
        data = data[parameter]
        return data


class HistoricalDataFilterFactory(FilterAbstractFactory):
    def factory(self):
        return HistoricalDataFilter()
