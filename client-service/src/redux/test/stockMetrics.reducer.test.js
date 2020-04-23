import reducer, { initialState } from '../reducers/stockMetrics';
import data from '../../testing/utils/stockMetrics.json'
import { FETCH_STOCK_METRICS } from '../actionTypes';

describe('Stock Metrics reducer', () => {

    it('should return default state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })
})