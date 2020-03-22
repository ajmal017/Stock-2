import React from 'react';
import logic from './logic'
import ScatterChart from '../scatterPlot/scatterPlot'


const EfficientFrontier = () => {
    const { frontier, maxSharpe, minVolatility } = logic()
    return (
        <ScatterChart data1={frontier} data2={maxSharpe} data3={minVolatility}
            title="Efficient Frontier"
            tooltip="Efficient Frontier"
        ></ScatterChart>
    );
}

export default EfficientFrontier
