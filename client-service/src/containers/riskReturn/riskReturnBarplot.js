import React from 'react'
import logic from './logic'
import Barplot from '../charts/barplot/barplot'

const RiskReturnBarPlot = () => {
    const { riskReturn, stocks, loading } = logic()
    return (
        <Barplot data={riskReturn} keys={stocks} dataKey='ticker'
            title="Stock Returns and Volatility"
            tooltip="Returns = Annualised mean of log retuns || 
            Volatility = Annualised standard deviation of the log returns"
            loading={loading}
            blur={stocks.length < 1}
        ></Barplot>
    )
}

export default RiskReturnBarPlot
