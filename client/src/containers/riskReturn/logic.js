import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchStockRiskReturn } from '../../redux/actions'


const Logic = () => {
    const stocks = useSelector(state => state.stockReducer.stocksList)
    const riskReturn = useSelector(state => state.stockReducer.stockRiskReturn)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchStockRiskReturn(stocks))
    }, [stocks])

    return { stocks, riskReturn }

}

export default Logic