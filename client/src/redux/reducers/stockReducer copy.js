import {
    FETCH_STOCK_PRICE, SELECT_STOCK, REMOVE_STOCK, SET_ERROR,
    REMOVE_STOCK_PRICE, FETCH_STOCK_PRICE_HISTORY, FETCH_STOCK_PRICE_CHANGE,
    FETCH_STOCK_RISK_RETURN,
    FETCH_STOCK_PRICE_NORMALIZED
} from "../actionTypes"

const initialState = {
    stockPriceHistory: [],
    stockPriceChange: [],
    stockPriceNormalized: [],
    stockRiskReturn: [],
    stocksList: ['HPQ'],
    stocksSelected: {
        HPQ: {
            symbol: 'HPQ',
            name: 'HP Inc.',
            price: 22.64,
            exchange: 'New York Stock Exchange'
        }
    },
    stocks: {
        HPQ: {
            date: '2020-02-20',
            open: 22.39,
            high: 22.82,
            low: 22.38,
            close: 22.64,
            adjClose: 22.64,
            volume: 20456000,
            unadjustedVolume: 20456000,
            change: -0.25,
            changePercent: -1.117,
            vwap: 22.61333,
            label: 'February 20, 20',
            changeOverTime: -0.01117,
            symbol: 'HPQ'
        }
    }
}


const stockReducer = (state = initialState, action) => {

    switch (action.type) {
        case SELECT_STOCK:
            const { symbol } = action.data
            return {
                ...state,
                stocksSelected: { ...state.stocksSelected, [symbol]: action.data },
                stocksList: [...state.stocksList, action.data.symbol]
            }


        case REMOVE_STOCK:
            const newStocksSelected = { ...state.stocksSelected }
            delete newStocksSelected[action.data]
            return {
                ...state,
                stocksSelected: { ...newStocksSelected },
                stocksList: state.stocksList.filter(item => item !== action.data)

            }

        case FETCH_STOCK_PRICE:
            return {
                ...state,
                stocks: { ...state.stocks, ...action.data }
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


        case SET_ERROR:
            return { ...state }
        default:
            return state
    }
}

export default stockReducer