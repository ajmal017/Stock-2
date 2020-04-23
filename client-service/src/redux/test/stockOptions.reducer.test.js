import reducer, { initialState } from '../reducers/stockOptions';
import { FETCH_STOCK_OPTIONS, STOCK_OPTIONS_LOADING, STOCK_OPTIONS_NOT_LOADING } from '../actionTypes';
import data from '../../testing/utils/stockOptions.json'

describe('Stock Options reducer', () => {

    it('should return default state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should FETCH_STOCK_OPTIONS', () => {
        expect(reducer(undefined, { type: FETCH_STOCK_OPTIONS, data: data.option_prices })).toEqual({
            loading: false,
            optionPrices: data.option_prices
        })
    })

    it('should change status to loading', () => {
        expect(reducer(undefined, { type: STOCK_OPTIONS_LOADING })).toEqual({
            optionPrices: [],
            loading: true
        })
    })

    it('should change status to loading', () => {
        expect(reducer({
            loading: true,
            optionPrices: []
        }, { type: STOCK_OPTIONS_NOT_LOADING })).toEqual({
            optionPrices: [],
            loading: false
        })
    })

})