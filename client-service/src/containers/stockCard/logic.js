import React from 'react'
import { removeStockPrice, removeStock } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'


const Logic = () => {
    const stocks = useSelector(state => state.stockReducer.details)
    // const dispatch = useDispatch()

    // const handleDelete = (symbol) => {
    //     dispatch(removeStock(symbol))
    //     dispatch(removeStockPrice(symbol))

    // }

    return { stocks }

}

export default Logic
