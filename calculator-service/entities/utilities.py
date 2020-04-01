from abc import ABC, abstractmethod
import pandas as pd
from entities.Abstracts import AbstractFactory


class DictionaryConverterAbstract(ABC):
    @abstractmethod
    def convert_to_dictionary(self, df): pass


class DictionaryConverter(DictionaryConverterAbstract):
    def convert_to_dictionary(self, df):
        try:
            df['date'] = df.index.date
            dictionary = df.to_dict(orient='records')
            return dictionary
        except Exception as err:
            raise err



class DictionaryConverterFactory(AbstractFactory):
    def factory(self):
        return DictionaryConverter()
