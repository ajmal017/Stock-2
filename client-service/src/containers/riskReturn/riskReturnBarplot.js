import React from 'react'
import logic from './logic'
import Barplot from '../barplot/barplot'

const RiskReturnBarPlot = () => {
    const { riskReturn, stocks } = logic()
    return (
        <Barplot data={riskReturn} keys={stocks} dataKey='ticker'></Barplot>
    )
}

export default RiskReturnBarPlot
