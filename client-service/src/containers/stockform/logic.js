import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stockMetrics, stockHistory, stockDetails, portfolioMetrics, efficientFrontier, tickersAction } from '../../redux/actions'
import { setError } from '../../redux/errorActions'


const Logic = () => {
    const [value, setValue] = useState(null);

    const tickers = useSelector(state => state.tickers.tickers)
    const dispatch = useDispatch();

    let isDisabled = () => {
        return !value.symbol
    }


    const handleClick = (e) => {
        e.preventDefault()
        const ticker = value.symbol
        if (!tickers.includes(ticker)) {
            const payload = [...tickers, ticker]

            dispatch(tickersAction(ticker))
            dispatch(stockMetrics([ticker]))
            dispatch(stockHistory(payload))
            dispatch(stockDetails([ticker]))
            dispatch(portfolioMetrics(payload))
            dispatch(efficientFrontier(payload))

            setValue(null)
        }
        else {
            dispatch(setError('Stock already selected'))
            setValue(null)
        }
    }

    return { value, setValue, handleClick, tickers, isDisabled }
}

export default Logic




