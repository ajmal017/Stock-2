import React from 'react';
import logic from './logic'
import ScatterChart from '../scatterPlot/scatterPlot'


const EfficientFrontier = () => {
    const { data, } = logic()
    return (
        <ScatterChart data={data}
            title="Efficient Frontier"
            tooltip="Efficient Frontier"
        ></ScatterChart>
    );
}

export default EfficientFrontier
