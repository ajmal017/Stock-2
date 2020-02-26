import {
    FETCH_STOCK_PRICE, SET_ERROR, SELECT_STOCK, REMOVE_STOCK, REMOVE_STOCK_PRICE,
    FETCH_STOCK_PRICE_HISTORY, FETCH_STOCK_PRICE_CHANGE, FETCH_STOCK_RISK_RETURN,
    SET_LOADING_FALSE, SET_LOADING_TRUE, FETCH_STOCK_PRICE_NORMALIZED
} from './actionTypes'
import axios from 'axios'
import { STOCK_PRICE_URL, STOCK_PRICE_HISTORY_URL, STOCK_PRICE_CHANGE_URL, STOCK_RISK_RETURN_URL, STOCK_METRICS } from '../api'
import { batch } from 'react-redux'
//Calculate metrics

export const getMetrics = symbols => async dispatch => {
    try {
        dispatch({ type: SET_LOADING_TRUE })
        const res = await axios.post(STOCK_METRICS, { symbols })
        batch(() => {
            dispatch({ type: SELECT_STOCK, data: res.data.symbols })
            dispatch({ type: FETCH_STOCK_PRICE, data: res.data.price_history[-1] })
            dispatch({ type: FETCH_STOCK_PRICE_HISTORY, data: res.data.price_history })
            dispatch({ type: FETCH_STOCK_PRICE_CHANGE, data: res.data.price_history_change })
            dispatch({ type: FETCH_STOCK_PRICE_NORMALIZED, data: res.data.price_history_normalized })
            dispatch({ type: FETCH_STOCK_RISK_RETURN, data: res.data.stock_annual_log_risk_return })
            dispatch({ type: SET_LOADING_FALSE })
        })
    } catch (error) {
        console.log(error)
        dispatch({ type: SET_LOADING_FALSE })
    }
}


// Add stock for chips
export const selectStock = (symbol) => {
    return { type: SELECT_STOCK, data: symbol }
}

export const removeStock = symbol => {
    return { type: REMOVE_STOCK, data: symbol }
}


// add stock for cards with today's price
export const fetchStockPrice = (symbol) => async dispatch => {
    try {
        const res = await axios.get(`${STOCK_PRICE_URL}/${symbol}`)
        return dispatch({ type: FETCH_STOCK_PRICE, data: res.data })
    } catch (error) {
        console.log(error)
        return dispatch({ type: SET_ERROR, data: error })
    }
}

export const removeStockPrice = symbol => {
    return { type: REMOVE_STOCK_PRICE, data: symbol }
}


// fetch history price of stocks
export const fetchStockPriceHistory = symbols => async dispatch => {
    try {
        const res = await axios.post(`${STOCK_PRICE_HISTORY_URL}`, { symbols })
        return dispatch({ type: FETCH_STOCK_PRICE_HISTORY, data: res.data })
    } catch (error) {
        return dispatch({ type: SET_ERROR, data: error })
    }
}

// fetch price history
export const fetchStockPriceChange = symbols => async dispatch => {
    try {
        const res = await axios.post(`${STOCK_PRICE_CHANGE_URL}`, { symbols })
        return dispatch({ type: FETCH_STOCK_PRICE_CHANGE, data: res.data })
    } catch (error) {
        return dispatch({ type: SET_ERROR, data: error })
    }
}

export const fetchStockRiskReturn = symbols => async  dispatch => {
    try {
        const res = await axios.post(STOCK_RISK_RETURN_URL, { symbols })
        return dispatch({ type: FETCH_STOCK_RISK_RETURN, data: res.data })
    } catch (error) {
        return dispatch({ type: SET_ERROR, data: error })
    }
}


export const fetchAggregator = symbols => { }


