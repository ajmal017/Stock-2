import React, { useEffect } from 'react'
import { fetchStockPriceHistory } from '../../redux/actions'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'


const Logic = () => {
    const stocks = useSelector(state => state.stockReducer.stocksList);
    const stockPriceHistory = useSelector(state => state.stockReducer.stockPriceHistory);
    const dispatch = useDispatch()

    const fetchPriceHistory = () => {
        dispatch(fetchStockPriceHistory(stocks))
    }

    useEffect(() => {
        fetchPriceHistory()
    }, [stocks])


    return { stockPriceHistory, stocks }
}

export default Logic
