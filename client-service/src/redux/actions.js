import {
    FETCH_CARDS, SET_ERROR, SELECT_STOCK, REMOVE_STOCK, REMOVE_STOCK_PRICE,
    FETCH_STOCK_PRICE_HISTORY, FETCH_STOCK_RISK_RETURN,
    SET_LOADING_FALSE, SET_LOADING_TRUE, FETCH_STOCK_PRICE_NORMALIZED,
    FETCH_PORTFOLIO_RISK_RETURNS, INCREASE_COUNTER, FETCH_EFFICIENT_FRONTIER
} from './actionTypes'
import axios from 'axios'
import { STOCK_METRICS, EFFICIENT_FRONTIER } from '../api'
import { batch } from 'react-redux'
//Calculate metrics

export const getMetrics = symbols => async dispatch => {
    try {
        console.log('get metrics dispatched')
        dispatch({ type: SET_LOADING_TRUE })
        const res = await axios.post(STOCK_METRICS, { tickers: symbols })
        batch(() => {
            dispatch({ type: SELECT_STOCK, data: res.data.symbols })
            dispatch({ type: FETCH_CARDS, data: res.data.stock_details })
            dispatch({ type: FETCH_STOCK_PRICE_HISTORY, data: res.data.price_history })
            dispatch({ type: FETCH_STOCK_PRICE_NORMALIZED, data: res.data.price_history_normalized })
            dispatch({ type: FETCH_STOCK_RISK_RETURN, data: res.data.stock_annual_log_risk_return })
            dispatch({ type: FETCH_PORTFOLIO_RISK_RETURNS, data: res.data.portfolio_risk_returns })
            dispatch({ type: SET_LOADING_FALSE })
        })
    } catch (error) {
        console.log(error)
        dispatch({ type: SET_LOADING_FALSE })
        dispatch({ type: INCREASE_COUNTER })
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


export const getEfficientFrontier = symbols => async dispatch => {
    try {
        console.log('efficient frontier distapched')
        const res = await axios.post(EFFICIENT_FRONTIER, { tickers: symbols })
        dispatch({ type: FETCH_EFFICIENT_FRONTIER, data: res.data })
    }
    catch (error) {
        console.log(error)
        dispatch({ type: SET_LOADING_FALSE })
        dispatch({ type: INCREASE_COUNTER })
        dispatch({ type: SET_ERROR, data: 'Network Error -> Try again!' })
    }
}

