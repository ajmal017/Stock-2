import React from 'react'
import axios from 'axios'
import { FETCH_PORTFOLIO_ANALYSIS, SET_ERROR, REMOVE_ERROR } from './actionTypes'
import { PORTFOLO_ANALYSIS_URL } from '../api'



export const portfolioAnalysis = tickers => async dispatch => {
    try {
        console.log('fethcing portfolio analysis')
        const res = await axios.post(PORTFOLO_ANALYSIS_URL, { tickers: tickers })
        dispatch({ type: FETCH_PORTFOLIO_ANALYSIS, data: res.data })
    } catch (error) {
        console.log('portfolioAnalysis action creator dispatched error')
        SetError(dispatch, 'Network Error => Delete stock')
    }
}

const SetError = (dispatch, message) => {
    dispatch({ type: SET_ERROR, data: [message] })
    setTimeout(() => dispatch({ type: REMOVE_ERROR }), 4000);
}
