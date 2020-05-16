import React from 'react'
import { useSelector } from 'react-redux'

const Logic = () => {
    const stocks = useSelector(state => state.tickers.tickers)
    const maxSharpe = useSelector(state => state.efficientFrontier.maxSharpeDistribution)
    const loading = useSelector(state => state.efficientFrontier.loading)

    return { stocks, maxSharpe, loading }
}


export default Logic