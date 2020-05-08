import { LOGIN, LOGOUT } from '../actionTypes'


export const initialState = {
    authenticated: false,
    loading: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                authenticated: true,
                loading: false
            }
        case LOGOUT:
            return {
                ...state,
                authenticated: false,
                loading: false
            }
        default:
            return state
    }
}

export default reducer