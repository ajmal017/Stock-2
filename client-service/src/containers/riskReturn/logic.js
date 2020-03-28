import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'


const Logic = () => {
    const stocks = useSelector(state => state.stockDetails.tickers, shallowEqual)
    const riskReturn = useSelector(state => state.stockMetrics.volatilityReturns, shallowEqual)

    return { stocks, riskReturn }

}

export default Logic