import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, LabelList, ReferenceLine } from 'recharts'
import ChartContainer from '../chartContainer/chartContainer'
import COLOURS from './Colours'



const Barplot = ({ data, dataKey, tooltip, title, blur, bars, placeholder, loading }) => {
    return (
        <ChartContainer tooltip={tooltip} title={title} blur={blur} placeholder={placeholder} loading={loading}>
            < BarChart data={data} margin={{ top: 15, right: 30, left: 5, bottom: 15 }} >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={dataKey} />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <ReferenceLine y={0} stroke="#000" />
                {bars.map((item, i) => (
                    <Bar dataKey={item.dataKey} fill='#040E27' key={i}>
                        <LabelList dataKey={item.labelKey} position="top"
                            formatter={value => value.toString() + '%'} />
                    </Bar>
                ))}
            </BarChart >
        </ChartContainer>

    )
}

export default Barplot