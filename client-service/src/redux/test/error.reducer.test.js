import reducer, { initialState } from '../reducers/errorReducer';
import { SET_ERROR, REMOVE_ERROR } from '../actionTypes';

describe('Error reducer', () => {

    it('should return default state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('shold handle SET_ERROR', () => {
        expect(reducer(undefined, {
            type: SET_ERROR,
            data: 'testing message'
        })).toEqual({ message: 'testing message' })
    })

    it('should handle REMOVE_ERROR', () => {
        expect(reducer({ message: 'testing message' }, {
            type: REMOVE_ERROR,
        })).toEqual({ message: null })
    })
})