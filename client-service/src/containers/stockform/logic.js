import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    stockMetrics, stockHistory, stockDetails, portfolioMetrics, efficientFrontier,
    tickersAction, stockOptions
} from '../../redux/actions'
import { setError } from '../../redux/errorActions'
import stocDictList from './stock_dict.json'


const Logic = () => {
    const [value, setValue] = useState(null);

    const tickers = useSelector(state => state.tickers.tickers)
    const dispatch = useDispatch();

    let isDisabled = () => {
        return !value.symbol
    }


    const handleClick = (e) => {
        e.preventDefault()
        if (!value) dispatch(setError('Select a stock from the dropwdown menu'))
        else {
            const ticker = value.symbol
            if (!stocDictList[ticker]) dispatch(setError('Select a stock from the dropwdown menu'))
            else if (tickers.includes(ticker)) {
                dispatch(setError('Stock already selected'))
            }
            else {
                const payload = [...tickers, ticker]
                setValue(null)

                dispatch(tickersAction(ticker))
                dispatch(stockMetrics([ticker]))
                dispatch(stockHistory(payload))
                dispatch(stockDetails([ticker]))
                dispatch(portfolioMetrics(payload))
                dispatch(efficientFrontier(payload))
                // dispatch(stockOptions(payload))

            }
        }
    }
    return { value, setValue, handleClick, tickers, isDisabled }

}
export default Logic




