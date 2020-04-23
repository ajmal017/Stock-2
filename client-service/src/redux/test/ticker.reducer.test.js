import reducer, { initialState } from '../reducers/tickers';
import { ADD_TICKER, REMOVE_TICKER } from '../actionTypes';

describe('Ticker reducer', () => {

    it('should return default state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle ADD_TICKER', () => {
        expect(reducer(undefined, {
            type: ADD_TICKER,
            data: 'TEST'
        })).toEqual({ tickers: ['TEST'] })
    })

    it('should handle REMOVE_TICKER', () => {
        expect(reducer({ tickers: ['TEST'] }, {
            type: REMOVE_TICKER,
            data: 'TEST'
        })).toEqual({ tickers: [] })
    })

    it('should filter ticker from array', () => {
        expect(reducer({ tickers: ['TEST', 'OTHER'] }, {
            type: REMOVE_TICKER,
            data: 'TEST'
        })).toEqual({ tickers: ['OTHER'] })
    })




})