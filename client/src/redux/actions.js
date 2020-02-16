import { FETCH_STOCK_PRICE } from './actionTypes'
import axios from 'axios'
import { STOCK_PRICE_URL, SET_ERROR } from '../api'

export const fetchData = (symbol) => async dispatch => {
    try {
        const res = await axios.get(`${STOCK_PRICE_URL}/${symbol}`)
        dispatch({ type: FETCH_STOCK_PRICE, data: res.data })
    } catch (error) {
        dispatch({ type: SET_ERROR, data: error })
    }
}



