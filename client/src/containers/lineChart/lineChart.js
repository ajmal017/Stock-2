import React, { useState } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const mydata = [
    {
        close: 127.83,
        tradingDate: "2015-02-17"
    },
    {
        close: 128.72,
        tradingDate: "2015-02-18"
    },
    {
        close: 128.45,
        tradingDate: "2015-02-19"
    },
    {
        close: 129.5,
        tradingDate: "2015-02-20"
    },

]


const lineChart = () => {
    return (
        <LineChart
            width={730} height={250}

            data={mydata}
            margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="tradingDate" />
            <YAxis domain={['dataMin', 'dataMax']} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="close" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
    );
}

export default lineChart
