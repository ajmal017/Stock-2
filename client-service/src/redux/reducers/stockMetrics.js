import {
    FETCH_STOCK_METRICS,
    STOCK_METRICS_LOADING,
    STOCK_METRICS_NOT_LOADING, REMOVE_TICKER
} from "../actionTypes"

export const initialState = {
    volatilityReturns: [],
    loading: false,

}


const stockMetrics = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_STOCK_METRICS:
            return {
                ...state,
                volatilityReturns: [...state.volatilityReturns, ...action.data]
            }

        case STOCK_METRICS_NOT_LOADING:
            return {
                ...state,
                loading: false
            }

        case STOCK_METRICS_LOADING:
            return {
                ...state,
                loading: true
            }

        case REMOVE_TICKER:
            return {
                ...state,
                volatilityReturns: state.volatilityReturns.filter(item => item.ticker !== action.data)
            }



        default:
            return state
    }
}

export default stockMetrics