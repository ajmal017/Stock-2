import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'


const Logic = () => {
    const stocks = useSelector(state => state.tickers.tickers)

    const data = useSelector(state => (state.stockOptions.optionPrices), shallowEqual);
    const loading = useSelector(state => (state.stockOptions.loading), shallowEqual);
    return { data, loading, stocks }
}

export default Logic
