from abc import ABC, abstractmethod
import pandas as pd
from entities.Factory import AbstractFactory


class DataFramerAbstract(ABC):
    @abstractmethod
    def create_dataframe(self, data): pass


class DataFramer(DataFramerAbstract):
    @staticmethod
    def create_dataframe(data=None, index=None):
        df = pd.DataFrame.from_dict(data, orient='index')
        if index is not None:
            df.set_index(index, inplace=True)
        df = df.astype('float')
        df.index = pd.to_datetime(df.index)
        return df


class DataframerFactory(AbstractFactory):
    def factory(self):
        return DataFramer


class DataFrameJoinerAbstract(ABC):
    @abstractmethod
    def join_dataframes(self, array_of_tickers): pass


class DataFrameJoiner(DataFrameJoinerAbstract):
    @staticmethod
    def join_dataframes(array_of_tickers, column_filter):
        dataframes = []
        for ticker in array_of_tickers:
            df = ticker.dataframe[[column_filter]].rename(
                columns={column_filter: ticker.get_ticker()})
            dataframes.append(df)
        joined = dataframes[0].join(dataframes[1:]).dropna(how='any')
        return joined


class DataFrameJoinerFactory(AbstractFactory):
    def factory(self):
        return DataFrameJoiner
