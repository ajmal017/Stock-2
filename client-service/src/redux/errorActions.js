import { SET_ERROR, REMOVE_ERROR } from './actionTypes'


export const setError = message => dispatch => {
    dispatch({ type: SET_ERROR, data: message })
    setTimeout(() => dispatch({ type: REMOVE_ERROR }), 4000);
}

