import {
    FETCH_PORTFOLIO_METRICS,
    PORTFOLIO_METRICS_LOADING,
    PORTFOLIO_METRICS_NOT_LOADING,
    RESET_REDUCER
} from "../actionTypes"

export const initialState = {
    portfolio: {
        returns: 0,
        volatility: 0,
        returnsChange: 0,
        volatilityChange: 0,
        sharpeRatio: 0

    },
    loading: false
}


const portfolioMetrics = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PORTFOLIO_METRICS:
            return {
                ...state,
                portfolio: {
                    ...state.portfolio,
                    returns: action.data.portfolio_returns,
                    volatility: action.data.portfolio_volatility,
                    returnsChange: action.data.portfolio_returns_change,
                    volatilityChange: action.data.portfolio_volatility_change * -1,
                    sharpeRatio: action.data.sharpe_ratio
                }
            }

        case PORTFOLIO_METRICS_NOT_LOADING:
            return {
                ...state,
                loading: false
            }

        case PORTFOLIO_METRICS_LOADING:
            return {
                ...state,
                loading: true
            }

        case RESET_REDUCER:
            return {
                ...state,
                state: initialState

            }

        default:
            return state
    }
}

export default portfolioMetrics