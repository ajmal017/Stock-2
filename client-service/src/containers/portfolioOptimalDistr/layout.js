import React from 'react'
import logic from './logic'
import Barplot from '../charts/barplot2/barplot'

const layout = () => {
    const { stocks, maxSharpe, loading } = logic()
    return (
        <Barplot data={maxSharpe} keys={stocks} dataKey='ticker'
            title="Optimal Risk Adjusted Distribution"
            tooltip="Portfolio distribution with the highest Sharpe ratio from the Efficient Frontier"
            loading={loading}
            blur={stocks.length < 2}
            bars={[{ dataKey: 'value', labelKey: 'value' }]}
            placeholder='Select 2+ companies'
        ></Barplot>
    )
}

export default layout