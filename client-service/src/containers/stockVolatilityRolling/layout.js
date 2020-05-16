import React, { Suspense, lazy } from 'react'
import logic from './logic'
import LineChart from '../charts/lineChart/lineChart'

const Layout = () => {
    const { stocks, rollingVolatility } = logic()
    return (

        <LineChart
            blur={stocks.length < 1}
            title='Volatility Evolution'
            tooltip='Volatility of stocks every 6 months'
            data={rollingVolatility}
            stocks={stocks}
            dataKey="date"
            tickFormatter
            placeholder='Select a Company'

        ></LineChart>
    )
}

export default Layout

