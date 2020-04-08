import React from 'react'
import logic from './logic'
import Barplot from '../charts/barplot/barplot'

const RiskReturnBarPlot = () => {
    const { riskReturn, stocks, loading } = logic()
    return (
        <Barplot data={riskReturn} keys={stocks} dataKey='ticker'
            title="Stock Returns and Volatility"
            tooltip="Returns = Annualised mean of the daily simple returns || 
            Volatility = Annualised standard deviation of the daily returns"
            loading={loading}
            blur={stocks.length < 1}
        ></Barplot>
    )
}

export default RiskReturnBarPlot
