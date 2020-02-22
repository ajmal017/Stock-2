import React, { useEffect, useState } from 'react'
import { fetchStockPriceHistory } from '../../redux/actions'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'


const Logic = () => {
    const stocks = useSelector(state => state.stockReducer.stocksList);
    const stockPriceHistory = useSelector(state => state.stockReducer.stockPriceHistory);
    const dispatch = useDispatch()
    const COLOURS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const [loading, setLoading] = useState(true)

    const fetchPriceHistory = () => {
        dispatch(fetchStockPriceHistory(stocks))
    }

    useEffect(() => {
        fetchPriceHistory()
    }, [stocks])


    return { stockPriceHistory, COLOURS, stocks, loading }
}

export default Logic
