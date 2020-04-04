import React from 'react'
import { useSelector } from 'react-redux'

const Logic = () => {
    const stocks = useSelector(state => state.tickers.tickers)
    const maxSharpe = useSelector(state => state.efficientFrontier.maxSharpeDistribution)
    const minVolatility = useSelector(state => state.efficientFrontier.minVolatilityDistribution)
    const loading = useSelector(state => state.efficientFrontier.loading)

    return { stocks, maxSharpe, minVolatility, loading }
}


export default Logic