import {
    ADD_TICKER,
    REMOVE_TICKER
} from "../actionTypes"

const initialState = {
    tickers: []
}


const tickers = (state = initialState, action) => {

    switch (action.type) {

        case ADD_TICKER:
            return {
                ...state,
                tickers: [...state.tickers, action.data]
            }

        case REMOVE_TICKER:
            return {
                ...state,
                tickers: state.tickers.filter(item => item !== action.data)
            }

        default:
            return state
    }
}

export default tickers