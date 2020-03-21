import React from 'react';
import {
    ScatterChart, Scatter, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid, Label
} from 'recharts';
import { Container, Row, Col } from 'react-bootstrap'
import style from './style.module.css'
import { Paper } from '@material-ui/core'
import TP from '../tooltip/tooltip'


const scatterPlot = ({ title, tooltip, data }) => {
    return (
        <Container fluid className={style.section}><Row className={style.row}><Col className={style.col}>
            <Paper elevation={11} className={style.paper}>
                <h5 className={style.title}>{title}
                    <TP tooltip={tooltip}></TP>
                </h5>
                <ResponsiveContainer width="100%" height={400}>
                    <ScatterChart
                        margin={{
                            top: 20, right: 20, left: 20, bottom: 20,
                        }}
                    >
                        <Scatter data={data} fill="#8884d8" name="Return/Risk" />

                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" dataKey="volatility" name="Expected Volatility" unit="%" domain={['auto', 'auto']}>
                            <Label value="Expected Volatility" position="insideBottomRight" offset={0} />
                        </XAxis>
                        <YAxis type="number" dataKey="returns" name="Expected Returns" unit="%" domain={['auto', 'auto']}
                            label={{ value: 'Expected Returns', angle: -90, position: 'left' }} />
                        <Tooltip />
                        <Legend />
                    </ScatterChart>
                </ResponsiveContainer>

            </Paper>
        </Col></Row></Container >

    );
}

export default scatterPlot