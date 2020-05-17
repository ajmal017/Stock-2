import React from 'react'
import { useSelector } from 'react-redux'

const Logic = () => {
    const stocks = useSelector(state => state.tickers.tickers)
    const cumulativeReturns = useSelector(state => state.stockHistory.cumulativeReturns)
    const loading = useSelector(state => state.stockHistory.loading)

    return { stocks, cumulativeReturns, loading }
}

export default Logic