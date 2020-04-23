import reducer, { initialState } from '../reducers/stockMetrics';

describe('Stock Metrics reducer', () => {

    it('should return default state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

})