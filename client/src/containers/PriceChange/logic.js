import React, { useEffect } from 'react'
import { fetchStockPriceChange } from '../../redux/actions'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'


const Logic = () => {
    const stocks = useSelector(state => state.stockReducer.stocksList);
    const stockPriceChange = useSelector(state => state.stockReducer.stockPriceChange);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchStockPriceChange(stocks))
    }, [stocks])


    return { stockPriceChange, stocks }
}

export default Logic
