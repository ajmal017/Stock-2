import React, { Fragment } from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer, LabelList } from 'recharts'
import COLOURS from '../lineChart/Colours'
import { Container, Row, Col } from 'react-bootstrap'
import style from './style.module.css'
import { Paper } from '@material-ui/core'


const Barplot = ({ data, keys, dataKey }) => {
    console.log(data)

    return (
        < Container fluid className={style.section} > <Row><Col className={style.col}>
            <Paper elevation={11} className={style.paper}>
                <ResponsiveContainer width="100%" height={350}>
                    < BarChart width={730} height={250} data={data} margin={{ top: 15, right: 30, left: 20, bottom: 5 }} >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={dataKey} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey='return' fill='#82ca9d'>
                            <LabelList dataKey="return" position="top" formatter={value => value.toString() + '%'} />
                        </Bar>
                        <Bar dataKey='risk' fill='#ff7300'>
                            <LabelList dataKey="risk" position="top" formatter={value => value.toString() + '%'} />
                        </Bar>
                    </BarChart >
                </ResponsiveContainer>

            </Paper>
        </Col></Row></Container >
    )
}

export default Barplot