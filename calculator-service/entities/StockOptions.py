from entities.Abstracts import AbstractFactory, FormulatorAbstract
import numpy as np
import pandas as pd
from scipy.stats import norm, linregress

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
                    r = 0.00011
                    K = round(S * indicator / 100, 2)
                    T = 1
                    option_price = round(self.euro_vanilla_call(S, K, r, T, stdev), 2)
                    if option_price > 0:
                        entry = {
                            'name':item, 'type': 'Call', 'price': option_price, 'strike': K}
                        results.append(entry)
            return {'option_prices':results}

        except Exception as err:
            raise RuntimeError(f'Options Pricer formula failed - {err}')

    def euro_vanilla_call(self, S, K, T, r, sigma):
        try:
            # S: spot price
            # K: strike price
            # T: time to maturity
            # r: interest rate
            # sigma: volatility of underlying asset

            d1 = (np.log(S / K) + (r + sigma ** 2 / 2) * T) / (sigma * np.sqrt(T))
            d2 = (np.log(S / K) + (r - sigma ** 2 / 2 ) * T) / (sigma * np.sqrt(T))
            call = (S * norm.cdf(d1, 0.0, 1.0) - K * np.exp(-r * T) * norm.cdf(d2, 0.0, 1.0))
            return call
        except Exception as err:
            raise RuntimeError('d1 formula in Black Scholes failed')


    def d1(self, S, K, r, stdev, T):
        try:
            return (np.log(S / K) + (r + stdev ** 2 / 2) * T) / (stdev * np.sqrt(T))
        except Exception as err:
            raise RuntimeError('d1 formula in Black Scholes failed')

    def d2(self, S, K, r, stdev, T):
        try:
            return (np.log(S / K) + (r - stdev ** 2 / 2) * T) / (stdev * np.sqrt(T))
        except Exception as err:
            raise RuntimeError('d1 formula in Black Scholes failed')

    def bsm(self, S, K, r, stdev, T):
        try:
            return (S * norm.cdf(self.d1(S, K, r, stdev, T))) - (K * np.exp(-r * T) * norm.cdf(self.d2(S, K, r, stdev, T)))
        except Exception as err:
            raise RuntimeError('d1 formula in Black Scholes failed')


class OptionsPricerFactory(AbstractFactory):
    def factory(self):
        return OptionsPricer()