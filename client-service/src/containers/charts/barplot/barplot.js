import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, LabelList, ReferenceLine } from 'recharts'
import ChartContainer from '../chartContainer/chartContainer'



const Barplot = ({ data, dataKey, tooltip, title }) => {
    return (
        <ChartContainer tooltip={tooltip} title={title} blur={!data.length > 0}>
            < BarChart data={data} margin={{ top: 15, right: 30, left: 20, bottom: 15 }} >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={dataKey} />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey='annual_mean_return' fill='#82ca9d'>
                    <LabelList dataKey="annual_mean_return" position="top" formatter={value => value.toString() + '%'} />
                </Bar>
                <Bar dataKey='price_volatility' fill='#ff7300'>
                    <LabelList dataKey="price_volatility" position="top" formatter={value => value.toString() + '%'} />
                </Bar>
            </BarChart >
        </ChartContainer>

    )
}

export default Barplot