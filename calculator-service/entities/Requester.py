import requests
from abc import ABC, abstractmethod


class RequesterAbstract(ABC):
    @abstractmethod
    def get_data(self, url): pass


class Requester(RequesterAbstract):
    def __init__(self):
        self.requester = requests

    def get_data(self, url):
        try:
            response = self.requester.get(url)
            response.raise_for_status()
            return response.json()
        except Exception as error:
            raise error


class RequesterAbstractFactory(ABC):
    @abstractmethod
    def factory(self): pass


class RequesterFactory(RequesterAbstractFactory):
    def factory(self):
        return Requester()
