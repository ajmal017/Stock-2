from entities.Abstracts import AbstracFactory, FormulatorAbstract
from utilities.decorators import try_except
import numpy as np
from scipy.stats import norm

class PriceForecast(FormulatorAbstract):
    def calculate(self, df):
        try:
            log_returns = df.daily_log_returns()
            mean = log_returns.mean()
            variance = log_returns.var()
            drift = mean - (0.5 * variance)
            stdev = log_returns.std()
            t_intervals = 1000
            iterations = 10
            daily_returns = np.exp(
                drift.values + stdev.values * norm.ppf(np.random.rand(
                    t_intervals, iterations)))
            S0 = df.dataframe.iloc[-1]
            price_list = np.zeros_like(daily_returns)
            price_list[0] = S0
            for t in range(1, t_intervals):
                price_list[t] = price_list[t - 1] * daily_returns[t]

            return {'price_list':price_list}

        except Exception as error:
            raise RuntimeError(f'PortfolioRiskReturn formula failed {error}')