import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTicker, stockHistory, efficientFrontier, portfolioMetrics, resetReducers } from '../../redux/actions'

const Logic = () => {
    const stocks = useSelector(state => state.stockDetails.stockDetails)
    const tickers = useSelector(state => state.tickers.tickers)
    const dispatch = useDispatch()

    const handleDelete = (e, ticker) => {
        const newStocks = tickers.filter(item => item !== ticker)
        if (newStocks.length > 0) {
            e.preventDefault()
            dispatch(stockHistory(newStocks))
            dispatch(efficientFrontier(newStocks))
            dispatch(portfolioMetrics(newStocks))
        }
        if (newStocks.length === 0) {
            dispatch(resetReducers())
        }

        dispatch(removeTicker(ticker))

    }
    return { stocks, handleDelete }

}

export default Logic
