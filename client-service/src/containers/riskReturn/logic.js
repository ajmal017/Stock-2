import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'


const Logic = () => {
    const stocks = useSelector(state => state.stockDetails.tickers, shallowEqual)
    const riskReturn = useSelector(state => state.stockMetrics.volatilityReturns, shallowEqual)
    const loading = useSelector(state => state.stockMetrics.loading, shallowEqual)

    return { stocks, riskReturn, loading }

}

export default Logic