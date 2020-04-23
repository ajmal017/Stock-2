import reducer, { initialState } from '../reducers/efficientFrontier'
import data from '../../testing/utils/efficient_frontier.json'
import { FETCH_EFFICIENT_FRONTIER, EFFICIENT_FRONTIER_LOADING, RESET_EFFICIENT_FRONTIER } from '../actionTypes'

describe('Efficient Frontier reducer', () => {

    it('should return default state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should add data for FETCH_EFFICIENT_FRONTIER', () => {
        expect(reducer(undefined, { type: FETCH_EFFICIENT_FRONTIER, data: data })).toEqual({
            frontier: data.frontier,
            maxSharpeDistribution: data.max_sharpe_distribution,
            maxSharpePortfolio: data.max_sharpe_portfolio,
            minVolatilityDistribution: data.min_volatility_distribution,
            minVolatilityPortfolio: data.min_volatility_portfolio,
            loading: false
        })
    })

    it('should RESET_EFFICIENT_FRONTIER', () => {
        expect(reducer(undefined, { type: RESET_EFFICIENT_FRONTIER })).toEqual(initialState)
    })

    it('should change to loading', () => {
        const finalState = initialState
        finalState.loading = true
        expect(reducer(undefined, { type: EFFICIENT_FRONTIER_LOADING })).toEqual(finalState)
    })


})