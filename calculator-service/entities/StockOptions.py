from abc import abstractmethod, ABC
import numpy as np
import pandas as pd
from scipy.stats import norm, linregress
from entities.Abstracts import AbstractFactory, FormulatorAbstract


class OptionsPricer(FormulatorAbstract):
    def calculate(self, df):
        try:
            list_of_tickers = df.columns.tolist()
            results = []
            for indicator in range(90, 110, 1):
                for item in list_of_tickers:
                    dataframe = df[[item]]
                    S = dataframe[item].iloc[-1]
                    log_returns = np.log(1 + dataframe.pct_change())
                    stdev = float(log_returns.std() * 250 ** 0.5)
                    r = 0.00067
                    K = S * indicator / 100
                    T = 1
                    option_price = self.bsm(S, K, r, stdev, T)
                    entry={
                        'name':item,
                        'price': round(option_price,4),
                        'strike_price': round(K,4),
                        'type':'Call'
                    }
                    results.append(entry)
            return {'option_prices':results}

        except Exception as err:
            raise RuntimeError(f'Options Pricer formula failed - {err}')

    def d1(self, S, K, r, T, stdev):
        try:
            return (np.log(S / K) + (r + stdev ** 2 / 2) * T) / (stdev * np.sqrt(T))
        except Exception as err:
            raise RuntimeError('d1 formula in Black Scholes failed')

    def d2(self, S, K, r, T, stdev):
        try:
            return (np.log(S / K) + (r - stdev ** 2 / 2) * T) / (stdev * np.sqrt(T))
        except Exception as err:
            raise RuntimeError('d1 formula in Black Scholes failed')

    def bsm(self, S, K, r, T, stdev):
        try:
            return (S * norm.cdf(self.d1(S, K, r, stdev, T))) - (K * np.exp(-r * T) * norm.cdf(self.d2(S, K, r, stdev, T)))
        except Exception as err:
            raise RuntimeError('d1 formula in Black Scholes failed')



class OptionsPricerNew(FormulatorAbstract):
    def calculate(self, df):
        try:
            list_of_tickers = df.columns.tolist()
            results = []
            for indicator in range(90,110 ,2):
                for item in list_of_tickers:
                    dataframe = df[[item]]
                    S = dataframe[item].iloc[-1]
                    K = S * indicator / 100
                    T = 1
                    r = 0.00067
                    log_returns = np.log(1 + dataframe.pct_change())
                    stdev = float(log_returns.std() * 250 ** 0.5)
                    bsm = self.bsm(S, K, T, r, stdev)
                    if bsm > 0:
                        call_entry={
                            'name':item,
                            'price': round(bsm,4),

                            'strike_price': round(K,4),
                            'type':'Call'
                        }
                        results.append(call_entry)
            return {'option_prices':results}

        except Exception as err:
            raise RuntimeError(f'Options Pricer formula failed - {err}')


    def bsm(self, S, K, r, T, stdev):
        try:
            def d1(S, K, r, T, stdev):
                return (np.log(S / K) + (r + stdev ** 2 / 2) * T) / (stdev * np.sqrt(T))

            def d2(S, K, r, T, stdev):
                return (np.log(S / K) + (r - stdev ** 2 / 2) * T) / (stdev * np.sqrt(T))

            return (S * norm.cdf(d1(S, K, r, stdev, T))) - (K * np.exp(-r * T) * norm.cdf(d2(S, K, r, stdev, T)))
        except Exception as err:
            raise RuntimeError('d1 formula in Black Scholes failed')



class OptionsPricerFactory(AbstractFactory):
    def factory(self):
        return OptionsPricerNew()



