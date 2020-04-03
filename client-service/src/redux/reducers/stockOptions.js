import {
    FETCH_STOCK_OPTIONS, STOCK_OPTIONS_LOADING, STOCK_OPTIONS_NOT_LOADING, REMOVE_TICKER
} from '../actionTypes'

const initialState = {
    optionPrices: [],
    loading: false
}

const stockOptions = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_STOCK_OPTIONS:
            return {
                ...state,
                optionPrices: [...state.optionPrices, ...action.data]
            }

        case STOCK_OPTIONS_NOT_LOADING:
            return {
                ...state,
                loading: false
            }

        case STOCK_OPTIONS_LOADING:
            return {
                ...state,
                loading: true
            }

        case REMOVE_TICKER:
            return {
                ...state,
                optionPrices: state.optionPrices.filter(item => item.name !== action.data)

            }

        default:
            return { ...state }
    }
}


export default stockOptions