import reducer, { initialState } from '../reducers/efficientFrontier'

describe('Efficient Frontier reducer', () => {

    it('should return default state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })





})