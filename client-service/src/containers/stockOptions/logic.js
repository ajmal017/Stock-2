import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'


const Logic = () => {
    const stocks = useSelector(state => state.tickers.tickers)
    const loading = useSelector(state => state.stockOptions.loading)
    const stockOptions = useSelector(state => (state.stockOptions.optionPrices), shallowEqual);
    return { stockOptions, stocks, loading }
}

export default Logic
