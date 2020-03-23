import { FETCH_PORTFOLIO_RISK_RETURNS, FETCH_EFFICIENT_FRONTIER } from '../actionTypes'

const initialState = {
    portfolio: {
        returns: 0,
        volatility: 0,
        returnsChange: 0,
        volatilityChange: 0

    },
    efficientFrontier: [],
    maxSharpe: [],
    minVolatility: []
}

const portfolioReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PORTFOLIO_RISK_RETURNS:
            return {
                ...state,
                portfolio: {
                    ...state.portfolio,
                    returns: action.data.portfolio_returns,
                    volatility: action.data.portfolio_volatility,
                    returnsChange: action.data.portfolio_returns_change,
                    volatilityChange: action.data.portfolio_volatility_change * -1,
                    idiosyncraticRisk: action.data.idiosyncratic_risk,
                    systematicRisk: action.data.systematic_risk
                }
            }

        case FETCH_EFFICIENT_FRONTIER:
            return {
                ...state,
                efficientFrontier: action.data.efficient_frontier.frontier,
                maxSharpe: action.data.efficient_frontier.max_sharpe,
                minVolatility: action.data.efficient_frontier.min_volatility
            }

        default:
            return state
    }
}

export default portfolioReducer