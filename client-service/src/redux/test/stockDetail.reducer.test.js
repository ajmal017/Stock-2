import reducer, { initialState } from '../reducers/stockDetails';

describe('Stock Details reducer', () => {

    it('should return default state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

})