import React, { useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux'


const Logic = () => {
    const stocks = useSelector(state => (state.stockReducer.symbolList), shallowEqual)
    const stockPriceChange = useSelector(state => (state.stockReducer.stockPriceChange), shallowEqual);

    return { stockPriceChange, stocks }
}

export default Logic
