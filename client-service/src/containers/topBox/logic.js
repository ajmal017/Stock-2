import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'


const Logic = () => {
    const stocks = useSelector(state => state.tickers.tickers)
    const equal = useSelector(state => state.portfolioMetrics.portfolio)
    const loading = useSelector(state => state.efficientFrontier.loading)
    const optimal = useSelector(state => (state.efficientFrontier.maxSharpePortfolio), shallowEqual);
    const minimal = useSelector(state => (state.efficientFrontier.minVolatilityPortfolio), shallowEqual);
    let rows = []
    let placeholder = [
        ['Equal', 0, 0, 0],
        ['Optimal Risk Adjusted', 0, 0, 0],
        ['Minimum Volatility', 0, 0, 0,]
    ]
    if (optimal.length > 0) {
        rows.push(['Equal', equal.returns, equal.volatility, equal.sharpeRatio])
        rows.push(['Optimal Risk Adjusted', (optimal[0].returns * 100).toFixed(2), (optimal[0].volatility * 100).toFixed(2), (optimal[0].sharpe_ratio * 100).toFixed(2)])
        rows.push(['Minimum Volatility', (minimal[0].returns * 100).toFixed(2), (minimal[0].volatility * 100).toFixed(2), (minimal[0].sharpe_ratio * 100).toFixed(2)])
    }
    return { equal, loading, rows, stocks, placeholder }
}

export default Logic
