import React from 'react';
import {
    LineChart, Label, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid
} from 'recharts';
import { Container, Row, Col } from 'react-bootstrap'
import style from './style.module.css'
import { Paper } from '@material-ui/core'
import COLOURS from './Colours'
import TP from '../tooltip/tooltip'


const LinChart = ({ title, tooltip, data, stocks, width, yInterval, xInterval, xlabel, ylabel, dataKey, tickFormatter }) => {
    return (
        <Container fluid className={style.section}><Row className={style.row}><Col className={style.col}>
            <Paper elevation={11} className={style.paper}>
                <h5 className={style.title}>{title}
                    <TP tooltip={tooltip}></TP>
                </h5>
                <ResponsiveContainer width="100%" height={400}>
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
                </ResponsiveContainer>

            </Paper>
        </Col></Row></Container >

    );
}

export default LinChart
