import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid
} from 'recharts';

import COLOURS from './Colours'
import ChartContainer from '../chartContainer/chartContainer'


const LinChart = ({ title, tooltip, data, stocks, width, xInterval, dataKey, tickFormatter, loading }) => {
    return (
        <ChartContainer title={title} tooltip={tooltip} blur={!data.length > 0} loading={loading}>
            <LineChart
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid vertical={false} strokeDasharray="3 3" />

                <XAxis dataKey={dataKey} interval={xInterval} tickFormatter={tickFormatter}>
                </XAxis>
                <YAxis />
                <Tooltip />
                <Legend />
                {stocks.map((symbol, i) => (
                    <Line type="monotone" dataKey={symbol} stroke={COLOURS[i]} strokeWidth={width} key={i} />

                ))}
            </LineChart>
        </ChartContainer>

    );
}

export default LinChart
