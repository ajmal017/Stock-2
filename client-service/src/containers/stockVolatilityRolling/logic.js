import React from 'react'
import { useSelector } from 'react-redux'

const Logic = () => {
    const stocks = useSelector(state => state.tickers.tickers)
    const rollingVolatility = useSelector(state => state.efficientFrontier.rollingVolatility)

    return { stocks, rollingVolatility }
}

export default Logic