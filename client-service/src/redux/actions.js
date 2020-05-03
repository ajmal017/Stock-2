import React from 'react'


import {
    // Stock Resources
    FETCH_STOCK_DETAILS,
    STOCK_DETAILS_LOADING,
    STOCK_DETAILS_NOT_LOADING,

    FETCH_STOCK_PRICE_HISTORY,
    STOCK_PRICE_HISTORY_LOADING,
    STOCK_PRICE_HISTORY_NOT_LOADING,

    FETCH_STOCK_METRICS,
    STOCK_METRICS_LOADING,
    STOCK_METRICS_NOT_LOADING,

    FETCH_PORTFOLIO_METRICS,
    PORTFOLIO_METRICS_LOADING,
    PORTFOLIO_METRICS_NOT_LOADING,

    FETCH_STOCK_OPTIONS,
    STOCK_OPTIONS_LOADING,
    STOCK_OPTIONS_NOT_LOADING,


    FETCH_EFFICIENT_FRONTIER,
    EFFICIENT_FRONTIER_LOADING,
    EFFICIENT_FRONTIER_NOT_LOADING,

    SET_ERROR,

    ADD_TICKER,
    REMOVE_TICKER,
    RESET_REDUCER,
    RESET_EFFICIENT_FRONTIER,

    LOGIN, LOGOUT, REMOVE_ERROR
} from './actionTypes'
import axios from 'axios'

import {
    STOCK_METRICS_URL,
    STOCK_HISTORY_URL,
    STOCK_DETAILS_URL,
    PORTFOLIO_METRICS_URL,
    EFFICIENT_FRONTIER_URL,
    STOCK_OPTIONS_URL,
    LOGIN_URL, LOGOUT_URL, REGISTER_URL
} from '../api'

import { useDispatch } from 'react-redux'


export const stockMetrics = tickers => async dispatch => {
    try {
        dispatch({ type: STOCK_METRICS_LOADING })
        const res = await axios.post(STOCK_METRICS_URL, { tickers: tickers })
        dispatch({ type: FETCH_STOCK_METRICS, data: res.data.stock_annual_log_risk_return })

    } catch (error) {
        console.log('stockMetrics action creator dispatched error')
        SetError(dispatch, 'Network Error => Delete stock')

    } finally {
        dispatch({ type: STOCK_METRICS_NOT_LOADING })
    }
}


export const stockHistory = tickers => async dispatch => {
    try {
        dispatch({ type: STOCK_PRICE_HISTORY_LOADING })
        const res = await axios.post(STOCK_HISTORY_URL, { tickers: tickers })
        dispatch({ type: FETCH_STOCK_PRICE_HISTORY, data: res.data })

    } catch (error) {
        console.log('stockHistory action creator dispatched error')
        SetError(dispatch, 'Network Error => Delete stock')

    } finally {
        dispatch({ type: STOCK_PRICE_HISTORY_NOT_LOADING })
    }
}


export const stockDetails = tickers => async dispatch => {
    try {
        dispatch({ type: STOCK_DETAILS_LOADING })
        const res = await axios.post(STOCK_DETAILS_URL, { tickers: tickers })
        dispatch({ type: FETCH_STOCK_DETAILS, data: res.data })

    } catch (error) {
        console.log('stockDetails action creator dispatched error')
        SetError(dispatch, 'Network Error => Delete stock')

    } finally {
        dispatch({ type: STOCK_DETAILS_NOT_LOADING })
    }
}


export const portfolioMetrics = tickers => async dispatch => {
    try {
        dispatch({ type: PORTFOLIO_METRICS_LOADING })
        const res = await axios.post(PORTFOLIO_METRICS_URL, { tickers: tickers })
        dispatch({ type: FETCH_PORTFOLIO_METRICS, data: res.data })

    } catch (error) {
        console.log('portfolioMetrics action creator dispatched error')
        SetError(dispatch, 'Network Error => Delete stock')

    } finally {
        dispatch({ type: PORTFOLIO_METRICS_NOT_LOADING })
    }
}


export const efficientFrontier = tickers => async dispatch => {
    try {
        dispatch({ type: EFFICIENT_FRONTIER_LOADING })
        const res = await axios.post(EFFICIENT_FRONTIER_URL, { tickers: tickers })
        dispatch({ type: FETCH_EFFICIENT_FRONTIER, data: res.data })

    } catch (error) {
        console.log('efficientFrontier action creator dispatched error')
        SetError(dispatch, 'Network Error => Delete stock')

    } finally {
        dispatch({ type: EFFICIENT_FRONTIER_NOT_LOADING })
    }
}


export const tickersAction = ticker => dispatch => {
    dispatch({ type: ADD_TICKER, data: ticker })
}

export const stockOptions = tickers => async dispatch => {
    try {
        dispatch({ type: STOCK_OPTIONS_LOADING })
        const res = await axios.post(STOCK_OPTIONS_URL, { tickers: tickers })
        dispatch({ type: FETCH_STOCK_OPTIONS, data: res.data.option_prices })

    } catch (error) {
        console.log('stockOptions action creator dispatched error')
        SetError(dispatch, 'Network Error => Delete stock')

    } finally {
        dispatch({ type: STOCK_OPTIONS_NOT_LOADING })
    }
}


export const removeTicker = (ticker) => dispatch => {
    try {
        dispatch({ type: REMOVE_TICKER, data: ticker })
    } catch (error) {
        SetError(dispatch, 'Network Error => Delete stock')
    }
}


export const resetReducers = () => dispatch => {
    try {
        dispatch({ type: RESET_REDUCER })
    } catch (error) {
        SetError(dispatch, 'Network Error => Delete stock')
    }
}

export const resetEfficientFrontier = () => dispatch => {
    try {
        dispatch({ type: RESET_EFFICIENT_FRONTIER })
    } catch (error) {
        SetError(dispatch, 'Network Error => Delete stock')
    }
}

export const login = data => async dispatch => {
    try {
        const res = await axios.post(LOGIN_URL, data)
        dispatch({ type: LOGIN })
    } catch (error) {
        console.log(error)
        SetError(dispatch, 'Invalid Credentials')
    }
}

export const register = data => async dispatch => {
    try {
        const res = await axios.post(REGISTER_URL, data)
        dispatch({ type: LOGIN })
    } catch (error) {
        console.log(error)
        dispatch({ type: SET_ERROR, data: 'Invalid Credentials' })
    }
}

export const logout = () => async dispatch => {
    try {
        const res = await axios.get(LOGOUT_URL)
        dispatch({ type: LOGOUT })
    } catch (error) {
        dispatch({ type: SET_ERROR, data: error })
    }
}


const SetError = (dispatch, message) => {
    dispatch({ type: SET_ERROR, data: [message] })
    setTimeout(() => dispatch({ type: REMOVE_ERROR }), 4000);
}

