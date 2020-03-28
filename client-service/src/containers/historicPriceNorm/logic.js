import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'


const Logic = () => {
    const stocks = useSelector(state => state.tickers.tickers)
    const stockPriceHistory = useSelector(state => (state.stockHistory.priceNormalized), shallowEqual);
    const loading = useSelector(state => (state.stockHistory.loading), shallowEqual);
    return { stockPriceHistory, stocks, loading }
}

export default Logic
