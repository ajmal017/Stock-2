import React, { useEffect } from 'react'
import { removeStockPrice, removeStock } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'


const Logic = () => {
    const stocks = useSelector(state => state.stockReducer.stocks)
    const dispatch = useDispatch()

    const handleDelete = (symbol) => {
        dispatch(removeStock(symbol))
        dispatch(removeStockPrice(symbol))

    }

    return { stocks, handleDelete }

}

export default Logic
