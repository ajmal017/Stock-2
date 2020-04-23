import reducer, { initialState } from '../reducers/stockHistory';

describe('Stock History reducer', () => {

    it('should return default state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

})