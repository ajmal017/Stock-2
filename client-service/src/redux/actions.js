import {
    FETCH_CARDS, SET_ERROR, SELECT_STOCK, REMOVE_STOCK, REMOVE_STOCK_PRICE,
    FETCH_STOCK_PRICE_HISTORY, FETCH_STOCK_PRICE_CHANGE, FETCH_STOCK_RISK_RETURN,
    SET_LOADING_FALSE, SET_LOADING_TRUE, FETCH_STOCK_PRICE_NORMALIZED
} from './actionTypes'
import axios from 'axios'
import { STOCK_METRICS } from '../api'
import { batch } from 'react-redux'
//Calculate metrics

export const getMetrics = symbols => async dispatch => {
    try {
        dispatch({ type: SET_LOADING_TRUE })
        const res = await axios.post(STOCK_METRICS, { tickers: symbols })
        console.log('response received with metrics', res.data)
        batch(() => {
            dispatch({ type: SELECT_STOCK, data: res.data.symbols })
            dispatch({ type: FETCH_CARDS, data: res.data.price_history[res.data.price_history.length - 1] })
            dispatch({ type: FETCH_STOCK_PRICE_HISTORY, data: res.data.price_history })
            dispatch({ type: FETCH_STOCK_PRICE_CHANGE, data: res.data.price_history_change })
            dispatch({ type: FETCH_STOCK_PRICE_NORMALIZED, data: res.data.price_history_normalized })
            dispatch({ type: FETCH_STOCK_RISK_RETURN, data: res.data.stock_annual_log_risk_return })
            dispatch({ type: SET_LOADING_FALSE })
        })
    } catch (error) {
        console.log(error)
        dispatch({ type: SET_LOADING_FALSE })
        dispatch({ type: SET_ERROR, data: 'Network Error -> Try again!' })
    }
}


// Add stock for chips
export const selectStock = (symbol) => {
    return { type: SELECT_STOCK, data: symbol }
}

export const removeStock = symbol => {
    return { type: REMOVE_STOCK, data: symbol }
}


export const fetchAggregator = symbols => { }


