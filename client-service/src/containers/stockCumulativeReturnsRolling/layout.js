import React, { Suspense, lazy } from 'react'
import logic from './logic'
import LineChart from '../charts/lineChart/lineChart'

const Layout = () => {
    const { stocks, cumulativeReturns } = logic()
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

        ></LineChart>
    )
}

export default Layout

