from entities.Ticker import TickerFactory
from entities.Filter import HistoricalDataFilterFactory
from entities.DataFramer import DataframerFactory


class TickerRunner:

    @staticmethod
    def create_ticker_with_dataframe(ticker, ticker_name, column_filter):
        # initialising filter and dataframer
        filterer = HistoricalDataFilterFactory().factory()
        dataframer = DataframerFactory().factory()

        # Creating tick object
        tick = TickerFactory().factory(ticker[ticker_name])

        # filtering data in json received
        filtered_data = filterer.filter(ticker, column_filter)

        # creating a pandas frame and moving it to the ticker entity
        tick.dataframe = dataframer.create_dataframe(filtered_data)

        return tick
