import React from 'react'
import { useSelector } from 'react-redux'

const Logic = () => {
    const stocks = useSelector(state => state.tickers.tickers)
    const rollingVolatility = useSelector(state => state.efficientFrontier.rollingVolatility)
    const loading = useSelector(state => state.efficientFrontier.loading)

    return { stocks, rollingVolatility, loading }
}

export default Logic