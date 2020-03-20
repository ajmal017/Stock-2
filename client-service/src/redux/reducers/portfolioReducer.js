import { FETCH_PORTFOLIO_RISK_RETURNS, FETCH_EFFICIENT_FRONTIER } from '../actionTypes'

const initialState = {
    portfolio: {
        returns: 0,
        volatility: 0,
        returnsChange: 0,
        volatilityChange: 0

    },
    efficientFrontier: []
}

const portfolioReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PORTFOLIO_RISK_RETURNS:
            console.log('portfolio metrics reducer', action.data)
            return {
                ...state,
                portfolio: {
                    ...state.portfolio,
                    returns: action.data.portfolio_returns,
                    volatility: action.data.portfolio_volatility,
                    returnsChange: action.data.portfolio_returns_change,
                    volatilityChange: action.data.portfolio_volatility_change * -1
                }
            }

        case FETCH_EFFICIENT_FRONTIER:
            return {
                ...state,
                efficientFrontier: action.data.efficient_frontier
            }

        default:
            return state
    }
}

export default portfolioReducer