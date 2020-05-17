import React from 'react'
import { useSelector } from 'react-redux'

const Logic = () => {
    const stocks = useSelector(state => state.tickers.tickers)
    const rollingVolatility = useSelector(state => state.stockHistory.rollingVolatility)
    const loading = useSelector(state => state.stockHistory.loading)

    return { stocks, rollingVolatility, loading }
}

export default Logic