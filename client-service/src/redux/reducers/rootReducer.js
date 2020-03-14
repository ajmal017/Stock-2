import { combineReducers } from 'redux'
import stockReducer from './stockReducer'
import errorReducer from './errorReducer'
import portfolioReducer from './portfolioReducer'


export default combineReducers({
    stockReducer, errorReducer, portfolioReducer
})