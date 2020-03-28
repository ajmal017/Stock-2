import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'


const Logic = () => {
    const stocks = useSelector(state => state.tickers.tickers)
    const stockPriceHistory = useSelector(state => (state.stockHistory.priceHistory), shallowEqual);
    return { stockPriceHistory, stocks }
}

export default Logic
