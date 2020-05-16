import React from 'react'
import { useSelector } from 'react-redux'

const Logic = () => {
    const stocks = useSelector(state => state.tickers.tickers)
    const minVolatility = useSelector(state => state.efficientFrontier.minVolatilityDistribution)
    const loading = useSelector(state => state.efficientFrontier.loading)

    return { stocks, minVolatility, loading }
}


export default Logic