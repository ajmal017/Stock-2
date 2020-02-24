import {
    FETCH_STOCK_PRICE, SET_ERROR, SELECT_STOCK, REMOVE_STOCK, REMOVE_STOCK_PRICE,
    FETCH_STOCK_PRICE_HISTORY, FETCH_STOCK_PRICE_CHANGE, FETCH_STOCK_RISK_RETURN
} from './actionTypes'
import axios from 'axios'
import { STOCK_PRICE_URL, STOCK_PRICE_HISTORY_URL, STOCK_PRICE_CHANGE_URL, STOCK_RISK_RETURN_URL } from '../api'


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


