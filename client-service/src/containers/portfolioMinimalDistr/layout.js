import React from 'react'
import logic from './logic'
import Barplot from '../charts/barplot2/barplot'

const layout = () => {
    const { stocks, loading, minVolatility } = logic()
    return (
        <Barplot data={minVolatility} keys={stocks} dataKey='ticker'
            title="Minimal Volatility Distribution"
            tooltip="Portfolio distribution with the smallest volatility ratio from the Efficient Frontier"
            loading={loading}
            blur={stocks.length < 2}
            bars={[{ dataKey: 'value', labelKey: 'value' }]}
            placeholder='Select 2+ companies'
        ></Barplot>
    )
}

export default layout