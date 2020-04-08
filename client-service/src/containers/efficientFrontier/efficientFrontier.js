import React from 'react';
import logic from './logic'
import ScatterChart from '../charts/scatterPlot/scatterPlot'


const EfficientFrontier = () => {
    const { frontier, maxSharpe, minVolatility, loading, stocks } = logic()
    console.log('scatter', maxSharpe, minVolatility)
    return (
        <ScatterChart data1={frontier} data2={maxSharpe} data3={minVolatility}
            title="Efficient Frontier"
            tooltip="Random weights are assigned to the stocks in the portfolio and the 
            distributions with the highest Sharpe ratio and smallest volatility are flagged"

            loading={loading}
            blur={stocks.length < 2 ? true : false}
        ></ScatterChart>
    );
}

export default EfficientFrontier
