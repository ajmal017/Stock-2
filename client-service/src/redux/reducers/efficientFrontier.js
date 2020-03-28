import {

    FETCH_EFFICIENT_FRONTIER,
    EFFICIENT_FRONTIER_LOADING,
    EFFICIENT_FRONTIER_NOT_LOADING,
} from "../actionTypes"

const initialState = {

    frontier: [],
    maxSharpe: [],
    minVolatility: [],
    loading: false
}
const efficientFrontier = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_EFFICIENT_FRONTIER:
            console.log('efficient frontier reducer, ', action)
            return {
                ...state,
                frontier: action.data.efficient_frontier.frontier,
                maxSharpe: action.data.efficient_frontier.max_sharpe,
                minVolatility: action.data.efficient_frontier.min_volatility
            }

        case EFFICIENT_FRONTIER_LOADING:
            return {
                ...state,
                loading: true
            }

        case EFFICIENT_FRONTIER_NOT_LOADING:
            return {
                ...state,
                loading: false
            }

        default:
            return state
    }
}

export default efficientFrontier