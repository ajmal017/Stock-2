import reducer, { initialState } from '../reducers/stockHistory';
import { FETCH_STOCK_PRICE_HISTORY, STOCK_PRICE_HISTORY_LOADING, RESET_REDUCER, STOCK_PRICE_HISTORY_NOT_LOADING } from '../actionTypes';
import data from '../../testing/utils/stockHistory.json'

describe('Stock History reducer', () => {

    it('should return default state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should FETCH_STOCK_PRICE_HISTORY', () => {
        expect(reducer(undefined, { type: FETCH_STOCK_PRICE_HISTORY, data: data })).toEqual(
            {
                priceHistory: data.price_history,
                priceNormalized: data.price_history_normalized,
                loading: false
            }
        )
    })

    it('should RESET', () => {
        expect(reducer({
            priceHistory: data.price_history,
            priceNormalized: data.price_history_normalized,
            loading: false
        }, { type: RESET_REDUCER })).toEqual(initialState)
    })

    it('should change status to loading', () => {
        expect(reducer(undefined, { type: STOCK_PRICE_HISTORY_LOADING })).toEqual({
            priceHistory: [],
            priceNormalized: [],
            loading: true
        })
    })

    it('should change status to loading', () => {
        expect(reducer({
            priceHistory: [],
            priceNormalized: [],
            loading: false
        }, { type: STOCK_PRICE_HISTORY_NOT_LOADING })).toEqual({
            priceHistory: [],
            priceNormalized: [],
            loading: false
        })
    })

})