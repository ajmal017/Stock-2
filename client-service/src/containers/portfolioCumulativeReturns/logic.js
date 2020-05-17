import React from 'react'
import { useSelector } from 'react-redux'

const Logic = () => {
    const stocks = useSelector(state => state.tickers.tickers)
    const cumulativeReturns = useSelector(state => state.efficientFrontier.cumulativeReturns)
    const loading = useSelector(state => state.efficientFrontier.loading)

    return { stocks, cumulativeReturns, loading }
}

export default Logic