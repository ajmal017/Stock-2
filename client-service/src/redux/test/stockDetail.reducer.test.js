import reducer, { initialState } from '../reducers/stockDetails';
import data from '../../testing/utils/stockDetails.json'
import { FETCH_STOCK_DETAILS, REMOVE_TICKER, STOCK_DETAILS_LOADING } from '../actionTypes';
import store from '../store'

describe('Stock Details reducer', () => {

    it('should return default state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should FETCH_STOCK_DETAILS', () => {
        expect(reducer(undefined, { type: FETCH_STOCK_DETAILS, data: data })).toEqual({
            stockDetails: data.stock_details,
            loading: false,
        })
    })

    it('should change status to loading', () => {
        expect(reducer(undefined, { type: STOCK_DETAILS_LOADING })).toEqual({
            stockDetails: [],
            loading: true
        })
    })

})