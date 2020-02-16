import { FETCH_STOCK_PRICE } from "../actionTypes"

const initialState = {
    stocks: []
}

const stockReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_STOCK_PRICE:
            return {
                ...state,
                stocks: [...state.stocks, action.data]
            }
        default:
            return state
    }
}

export default stockReducer