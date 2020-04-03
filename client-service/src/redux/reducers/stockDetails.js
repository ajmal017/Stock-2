import {
    FETCH_STOCK_DETAILS,
    STOCK_DETAILS_LOADING,
    STOCK_DETAILS_NOT_LOADING,
    REMOVE_TICKER
} from "../actionTypes"

const initialState = {
    stockDetails: [],
    loading: false,
}


const stockDetails = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_STOCK_DETAILS:
            return {
                ...state,
                stockDetails: [...state.stockDetails, ...action.data.stock_details]
            }

        case STOCK_DETAILS_NOT_LOADING:
            return {
                ...state,
                loading: false
            }

        case STOCK_DETAILS_LOADING:
            return {
                ...state,
                loading: true
            }

        case REMOVE_TICKER:
            return {
                ...state,
                stockDetails: state.stockDetails.filter(item => item.ticker !== action.data)
            }

        default:
            return state
    }
}

export default stockDetails