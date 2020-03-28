import React from 'react';
import logic from './logic'
import ScatterChart from '../charts/scatterPlot/scatterPlot'


const EfficientFrontier = () => {
    const { frontier, maxSharpe, minVolatility, loading } = logic()
    return (
        <ScatterChart data1={frontier} data2={maxSharpe} data3={minVolatility}
            title="Efficient Frontier"
            tooltip="Efficient Frontier"
            loading={loading}
        ></ScatterChart>
    );
}

export default EfficientFrontier
