import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer, LabelList, ReferenceLine } from 'recharts'
import { Container, Row, Col } from 'react-bootstrap'
import style from './style.module.css'
import { Paper } from '@material-ui/core'


const Barplot = ({ data, dataKey }) => {
    return (
        < Container fluid className={style.section} >
            <Paper elevation={11} className={style.paper}>
                <ResponsiveContainer width="100%" height={350}>
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
                </ResponsiveContainer>
            </Paper>
        </Container >
    )
}

export default Barplot