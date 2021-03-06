import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    stockMetrics, stockHistory, stockDetails, portfolioMetrics, efficientFrontier,
    tickersAction, stockOptions
} from '../../redux/actions'
import { setError } from '../../redux/errorActions'
import stockDict from './stocks_dict.json'


const Logic = () => {
    const [value, setValue] = useState(null);

    const tickers = useSelector(state => state.tickers.tickers)
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault()
        if (!value) dispatch(setError('Select a stock from the dropwdown menu'))
        else {
            setValue(value)
            const ticker = value.symbol
            if (!stockDict[ticker]) dispatch(setError('Select a stock from the dropwdown menu'))
            if (tickers.includes(ticker)) {
                dispatch(setError('Stock already selected'))
            }
            else {
                const payload = [...tickers, ticker]
                if (payload.length >= 2) {
                    dispatch(efficientFrontier(payload))
                }
                setValue(null)
                dispatch(tickersAction(ticker))
                dispatch(stockMetrics([ticker]))
                dispatch(stockHistory(payload))
                dispatch(stockDetails([ticker]))
                dispatch(portfolioMetrics(payload))
                dispatch(stockOptions([ticker]))
            }

        }
    }
    return { value, setValue, handleClick, tickers }

}
export default Logic




