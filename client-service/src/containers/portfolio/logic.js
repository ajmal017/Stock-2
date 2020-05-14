import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Logic = () => {
    const stocks = useSelector(state => state.tickers.tickers)
    const rollingVolatility = useSelector(state => state.efficientFrontier.rollingVolatility)
    const cumulativeReturns = useSelector(state => state.efficientFrontier.cumulativeReturns)

    return { stocks, rollingVolatility, cumulativeReturns }
}

export default Logic