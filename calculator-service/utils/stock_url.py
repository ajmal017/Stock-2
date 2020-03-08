def get_stock_url(symbol):
    if not symbol:
        raise Exception('symbol not passed to get_stock_url function')
    else:
        return f'https://financialmodelingprep.com/api/v3/historical-price-full/{symbol}?serietype=line'