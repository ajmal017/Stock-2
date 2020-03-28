import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'


const Logic = () => {
    const stocks = useSelector(state => state.tickers.tickers)
    const loading = useSelector(state => state.stockHistory.loading)
    const stockPriceHistory = useSelector(state => (state.stockHistory.priceHistory), shallowEqual);
    console.log('refux loading', loading)
    return { stockPriceHistory, stocks, loading }
}

export default Logic
