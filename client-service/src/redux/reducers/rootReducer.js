import { combineReducers } from 'redux'
import stockReducer from './stockReducer'
import errorReducer from './errorReducer'


export default combineReducers({
    stockReducer, errorReducer
})