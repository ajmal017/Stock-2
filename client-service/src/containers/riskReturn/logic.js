import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'


const Logic = () => {
    const stocks = useSelector(state => state.stockReducer.symbolList, shallowEqual)
    const riskReturn = useSelector(state => state.stockReducer.stockRiskReturn, shallowEqual)

    return { stocks, riskReturn }

}

export default Logic