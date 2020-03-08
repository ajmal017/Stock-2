import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'


const Logic = () => {
    const stocks = useSelector(state => (state.stockReducer.symbolList), shallowEqual);
    const stockPriceHistory = useSelector(state => (state.stockReducer.stockPriceHistory), shallowEqual);
    return { stockPriceHistory, stocks }
}

export default Logic
