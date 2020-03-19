import { FETCH_PORTFOLIO_RISK_RETURNS } from '../actionTypes'

const initialState = {
    portfolio: {
        returns: 0,
        volatility: 0,
        volume: 10000,
        returnsChange: 0,
        volatilityChange: 0

    },
    historical: [],
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

        default:
            return state
    }
}

export default portfolioReducer