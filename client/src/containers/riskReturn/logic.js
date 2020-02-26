import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchStockRiskReturn } from '../../redux/actions'


const Logic = () => {
    const stocks = useSelector(state => state.stockReducer.symbolList)
    const riskReturn = useSelector(state => state.stockReducer.stockRiskReturn)

    return { stocks, riskReturn }

}

export default Logic