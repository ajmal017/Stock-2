import {
    FETCH_CARDS, SELECT_STOCK, REMOVE_STOCK, SET_ERROR, FETCH_STOCK_PRICE_HISTORY,
    FETCH_STOCK_PRICE_CHANGE, FETCH_STOCK_RISK_RETURN, SET_LOADING_FALSE, SET_LOADING_TRUE, FETCH_STOCK_PRICE_NORMALIZED,
    INCREASE_COUNTER
} from "../actionTypes"

const initialState = {
    stockPriceHistory: [],
    stockPriceNormalized: [],
    stockRiskReturn: [],
    symbolList: [],
    cards: [],
    initialSymbols: ['GS', 'F'],
    loading: false,
    counter: 0
}


const stockReducer = (state = initialState, action) => {

    switch (action.type) {
        case SELECT_STOCK:
            return {
                ...state,
                symbolList: [...action.data]
            }


        case REMOVE_STOCK:
            const newStocksSelected = { ...state.stocksSelected }
            delete newStocksSelected[action.data]
            return {
                ...state,
                stocksSelected: { ...newStocksSelected },
                stocksList: state.stocksList.filter(item => item !== action.data)

            }

        case FETCH_CARDS:
            return {
                ...state,
                cards: [action.data]
            }

        case FETCH_STOCK_PRICE_HISTORY:
            return {
                ...state,
                stockPriceHistory: [...action.data]
            }

        case FETCH_STOCK_PRICE_NORMALIZED:
            return {
                ...state,
                stockPriceNormalized: [...action.data]
            }

        case FETCH_STOCK_RISK_RETURN:
            return {
                ...state,
                stockRiskReturn: [...action.data]
            }

        case SET_LOADING_FALSE:
            return {
                ...state,
                loading: false
            }

        case SET_LOADING_TRUE:
            return {
                ...state,
                loading: true
            }

        case INCREASE_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            }
        case SET_ERROR:
            return { ...state }
        default:
            return state
    }
}

export default stockReducer