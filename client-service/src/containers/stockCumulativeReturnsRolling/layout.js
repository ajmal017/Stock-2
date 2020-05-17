import React from 'react'
import logic from './logic'
import LineChart from '../charts/lineChart/lineChart'

const Layout = () => {
    const { stocks, cumulativeReturns, loading } = logic()
    return (
        <LineChart
            blur={stocks.length < 1}
            title='Cumulative Log Returns'
            tooltip='Cumulative daily log returns of the stocks every 6 months'
            data={cumulativeReturns}
            stocks={stocks}
            dataKey="date"
            tickFormatter
            placeholder='Select a Company'
            loading={loading}
        ></LineChart>
    )
}

export default Layout

