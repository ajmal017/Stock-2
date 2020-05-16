import React from 'react'
import { useSelector } from 'react-redux'

const Logic = () => {
    const stocks = useSelector(state => state.tickers.tickers)
    const cumulativeReturns = useSelector(state => state.efficientFrontier.cumulativeReturns)

    return { stocks, cumulativeReturns }
}

export default Logic