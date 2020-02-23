import React from 'react'
import logic from './logic'
import Barplot from '../barplot/barplot'

const RiskReturnBarPlot = () => {
    const { riskReturn, stocks } = logic()
    return (
        <Barplot data={riskReturn} keys={stocks} dataKey='symbol'></Barplot>
    )
}

export default RiskReturnBarPlot
