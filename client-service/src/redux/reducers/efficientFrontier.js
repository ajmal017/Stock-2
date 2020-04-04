import {

    FETCH_EFFICIENT_FRONTIER,
    EFFICIENT_FRONTIER_LOADING,
    EFFICIENT_FRONTIER_NOT_LOADING,
    RESET_EFFICIENT_FRONTIER
} from "../actionTypes"

const initialState = {
    frontier: [],
    maxSharpeDistribution: [],
    maxSharpePortfolio: [],
    minVolatilityDistribution: [],
    minVolatilityPortfolio: [],
    loading: false
}
const efficientFrontier = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_EFFICIENT_FRONTIER:
            return {
                ...state,
                frontier: action.data.frontier,
                maxSharpeDistribution: action.data.max_sharpe_distribution,
                maxSharpePortfolio: action.data.max_sharpe_portfolio,
                minVolatilityDistribution: action.data.min_volatility_distribution,
                minVolatilityPortfolio: action.data.min_volatility_portfolio,
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

        case RESET_EFFICIENT_FRONTIER:
            return {
                ...state,
                frontier: [],
                maxSharpeDistribution: [],
                maxSharpePortfolio: [],
                minVolatilityDistribution: [],
                minVolatilityPortfolio: [],
                loading: false
            }

        default:
            return state
    }
}

export default efficientFrontier