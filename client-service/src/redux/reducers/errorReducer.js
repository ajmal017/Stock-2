import { SET_ERROR, REMOVE_ERROR } from '../actionTypes'

export const initialState = {
    message: []
}

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR:
            return {
                ...state,
                message: [...action.data]
            }

        case REMOVE_ERROR:
            return {
                ...state,
                message: []
            }
        default:
            return state
    }
}

export default errorReducer