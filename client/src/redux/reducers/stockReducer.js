import { FETCH_STOCK_PRICE, } from "../actionTypes"

const initialState = {
    stocksSelected: [],
    stocks: {}
}

const stockReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_STOCK_PRICE:
            const { symbol } = action.data
            const stock = { [symbol]: action.data.historical }
            return {
                ...state,
                stocks: { ...stock }
            }

        default:
            return state
    }
}

export default stockReducer