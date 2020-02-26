import React, { useEffect } from 'react'
import { fetchStockPriceHistory } from '../../redux/actions'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'


const Logic = () => {
    const stocks = useSelector(state => state.stockReducer.symbolList);
    const stockPriceHistory = useSelector(state => state.stockReducer.stockPriceNormalized);
    return { stockPriceHistory, stocks }
}

export default Logic
