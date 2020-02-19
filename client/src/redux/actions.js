import { FETCH_STOCK_PRICE, SET_ERROR } from './actionTypes'
import axios from 'axios'
import { STOCK_PRICE_URL } from '../api'

export const fetchStockData = (symbol) => async dispatch => {
    try {
        console.log('fetching data of stock', symbol)
        const res = await axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${symbol.symbol}`)
        // const res = await axios.get(`${STOCK_PRICE_URL}/${symbol.symbol}`)
        console.log('stock fetched', res.data)
        dispatch({ type: FETCH_STOCK_PRICE, data: res.data })
    } catch (error) {
        dispatch({ type: SET_ERROR, data: error })
    }
}



