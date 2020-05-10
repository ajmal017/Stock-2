import { FETCH_PORTFOLIO_ANALYSIS } from "../actionTypes"


export const initialState = {
    cumulativeReturns: [],
    cumulativeReturns: [],
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PORTFOLIO_ANALYSIS:
            return {
                ...state,
                rollingVolatility: [...action.data.rolling_volatility],
                cumulativeReturns: [...action.data.cumulative_returns],
                loading: false
            }
        default:
            return state
    }
}

export default reducer