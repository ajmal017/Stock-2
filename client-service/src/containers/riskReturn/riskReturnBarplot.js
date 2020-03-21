import React from 'react'
import logic from './logic'
import Barplot from '../barplot/barplot'

const RiskReturnBarPlot = () => {
    const { riskReturn, stocks } = logic()
    return (
        <Barplot data={riskReturn} keys={stocks} dataKey='ticker'
            title="Mean Annual Returns and Stock Volatility"
            tooltip="Returns is the mean of the annual log returns. 
            Volatility is the standard deviation of the daily log returns"
        ></Barplot>
    )
}

export default RiskReturnBarPlot
