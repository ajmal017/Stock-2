import {
    FETCH_STOCK_DETAILS,
    STOCK_DETAILS_LOADING,
    STOCK_DETAILS_NOT_LOADING,
} from "../actionTypes"

const initialState = {
    stockDetails: [],
    loading: false,
}


const stockDetails = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_STOCK_DETAILS:
            console.log('stockDetails', action)

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

        default:
            return state
    }
}

export default stockDetails