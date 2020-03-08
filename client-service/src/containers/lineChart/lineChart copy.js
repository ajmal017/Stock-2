import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid
} from 'recharts';
import logic from '../historicPrice/logic'
import { Container, Row, Col } from 'react-bootstrap'
import style from './style.module.css'
import { Paper } from '@material-ui/core'

const LinChart = () => {
    const { stockPriceHistory, COLOURS, stocks } = logic()
    return (
        <Container fluid className={style.section}><Row><Col className={style.col}>
            <Paper elevation={11} className={style.paper}>
                <ResponsiveContainer width="100%" height={500}>
                    <LineChart
                        width={900} height={450}
                        data={stockPriceHistory}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />

                        <XAxis dataKey="date" interval={180} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {stocks.map((symbol, i) => (
                            <Line type="monotone" dataKey={symbol} dot={false} stroke={COLOURS[i]} />

                        ))}
                    </LineChart>
                </ResponsiveContainer>

            </Paper>
        </Col></Row></Container >

    );
}


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


export default LinChart
