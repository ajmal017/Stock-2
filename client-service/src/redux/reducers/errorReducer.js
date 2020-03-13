import { SET_ERROR, REMOVE_ERROR } from '../actionTypes'

const initialState = {
    message: null
}

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR:
            return {
                ...state,
                message: action.data
            }

        case REMOVE_ERROR:
            return {
                ...state,
                message: null
            }
        default:
            return state
    }
}

export default errorReducer