import {
    FETCH_CARDS, SELECT_STOCK, REMOVE_STOCK, SET_ERROR, REMOVE_STOCK_PRICE,
    FETCH_STOCK_PRICE_HISTORY, FETCH_STOCK_PRICE_CHANGE, FETCH_STOCK_RISK_RETURN,
    SET_LOADING_FALSE, SET_LOADING_TRUE, FETCH_STOCK_PRICE_NORMALIZED
} from "../actionTypes"

const initialState = {
    stockPriceHistory: [],
    stockPriceChange: [],
    stockPriceNormalized: [],
    stockRiskReturn: [],
    symbolList: [],
    cards: [],
    initialSymbols: ['GS', 'BAC', 'MS'],
    loading: false
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
            console.log(action.data, 'fetch cards')
            return {
                ...state,
                cards: [action.data]
            }

        case REMOVE_STOCK_PRICE:
            const newStocks = { ...state.stocks }
            delete newStocks[action.data]
            return {
                ...state,
                stocks: { ...newStocks }
            }

        case FETCH_STOCK_PRICE_HISTORY:
            return {
                ...state,
                stockPriceHistory: [...action.data]
            }

        case FETCH_STOCK_PRICE_CHANGE:
            return {
                ...state,
                stockPriceChange: [...action.data]
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


        case SET_ERROR:
            return { ...state }
        default:
            return state
    }
}

export default stockReducer