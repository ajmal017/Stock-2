import { combineReducers } from 'redux'
import errorReducer from './errorReducer'
import stockDetails from './stockDetails'
import stockMetrics from './stockMetrics'
import stockHistory from './stockHistory'
import portfolioMetrics from './portfolioMetrics'
import efficientFrontier from './efficientFrontier'
import tickers from './tickers'


export default combineReducers({
    stockDetails,
    stockMetrics,
    stockHistory,
    portfolioMetrics,
    efficientFrontier,
    errorReducer,
    tickers
})