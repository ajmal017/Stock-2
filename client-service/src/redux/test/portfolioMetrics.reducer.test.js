import reducer, { initialState } from '../reducers/portfolioMetrics';
import data from '../../testing/utils/portfolioMetrics.json'
import { FETCH_PORTFOLIO_METRICS } from '../actionTypes';

describe('Portfolio Metrics reducer', () => {

    it('should return default state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

})