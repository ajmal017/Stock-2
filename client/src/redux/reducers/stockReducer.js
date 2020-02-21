import { FETCH_STOCK_PRICE, SELECT_STOCK, REMOVE_STOCK } from "../actionTypes"

const initialState = {
    stocksSelected: {},
    stocks: {}
}

const stockReducer = (state = initialState, action) => {

    switch (action.type) {
        case SELECT_STOCK:
            const { symbol } = action.data
            console.log('reducer', symbol)

            if (!state.stocksSelected[symbol])
                return {
                    ...state,
                    stocksSelected: { ...state.stocksSelected, [symbol]: action.data }
                }
            else return { ...state }

        case REMOVE_STOCK:
            const newStocksSelected = { ...state.stocksSelected }
            delete newStocksSelected[action.data]
            return {
                ...state,
                stocksSelected: { ...newStocksSelected }
            }
        default:
            return state
    }
}

export default stockReducer