import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid
} from 'recharts';

import COLOURS from './Colours'
import ChartContainer from '../chartContainer/chartContainer'


const LinChart = ({ title, tooltip, data, blur, stocks, width = 3, xInterval, dataKey, tickFormatter, loading, placeholder }) => {
    return (
        <ChartContainer placeholder={placeholder} title={title} tooltip={tooltip} blur={blur || !stocks.length > 0} loading={loading}>
            <LineChart
                data={data}
                margin={{
                    top: 5, right: 30, left: 5, bottom: 5,
                }}
            >
                <CartesianGrid vertical={false} />

                <XAxis dataKey={dataKey} tickFormatter={(value) => value.toString().slice(0, 4) || tickFormatter} interval={xInterval || 'preserveEnd'}>
                </XAxis>
                <YAxis />
                <Tooltip />
                <Legend />
                {stocks.map((symbol, i) => (
                    <Line dataKey={symbol} stroke={COLOURS[i]} strokeWidth={width} key={i} dot={false} activeDot={true} />

                ))}
            </LineChart>
        </ChartContainer >

    );
}

export default LinChart
