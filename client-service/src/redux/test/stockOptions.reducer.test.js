import reducer, { initialState } from '../reducers/stockOptions';

describe('Stock Options reducer', () => {

    it('should return default state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

})