import React from 'react'
import logic from './logic'
import LineChart from '../charts/lineChart/lineChart'


const Layout = () => {
    const { stocks, cumulativeReturns, loading } = logic()
    return (
        <LineChart
            placeholder='Select 2+ Companies'
            blur={stocks.length < 2}
            title='Portfolio Cumulative Log Returns'
            tooltip='Cumulative daily log returns of the portfolio every 6 months'
            data={cumulativeReturns}
            stocks={['equal', 'optimal', 'minimal']}
            dataKey="date"
            loading={loading}
        ></LineChart>
    )
}

export default Layout
