import reducer, { initialState } from '../reducers/portfolioMetrics';

describe('Portfolio Metrics reducer', () => {

    it('should return default state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

})