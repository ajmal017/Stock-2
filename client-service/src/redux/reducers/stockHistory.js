import {
    FETCH_STOCK_PRICE_HISTORY,
    STOCK_PRICE_HISTORY_LOADING,
    STOCK_PRICE_HISTORY_NOT_LOADING,
    RESET_REDUCER

} from "../actionTypes"

export const initialState = {
    priceHistory: [],
    priceNormalized: [],
    loading: false,
}


const stockHistory = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_STOCK_PRICE_HISTORY:
            return {
                ...state,
                priceHistory: [...action.data.price_history],
                priceNormalized: [...action.data.price_history_normalized]

            }

        case STOCK_PRICE_HISTORY_NOT_LOADING:
            return {
                ...state,
                loading: false
            }

        case STOCK_PRICE_HISTORY_LOADING:
            return {
                ...state,
                loading: true
            }

        case RESET_REDUCER:
            console.log('reset history', action)
            return {
                ...state,
                price_history: [],
                priceNormalized: [],
                loading: false
            }

        default:
            return state
    }
}

export default stockHistory