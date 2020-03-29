import React from 'react';
import { ResponsiveContainer } from 'recharts';
import { Container, Row, Col, } from 'react-bootstrap'
import style from './style.module.css'
import { Paper } from '@material-ui/core'
import TP from '../tooltip/tooltip'
import CircularProgress from '@material-ui/core/CircularProgress';

const chartContainer = (props) => {
    let placeholder = null
    if (props.blur) placeholder = <p className={style.placeholder}>{props.placeholder ? props.placeholder : "Select a Company"}</p>
    return (
        <Container fluid className={style.section}>
            <Row className={style.row}>
                <Col className={style.col}>
                    <Paper elevation={11} className={props.blur ? style.blur : style.paper}>
                        <h5 className={style.title}>{props.title}
                            <TP tooltip={props.tooltip}></TP>
                            {props.loading ? <CircularProgress size={30} ></CircularProgress> : <p></p>}
                        </h5>
                        <ResponsiveContainer width="100%" height={400}>
                            {props.children}
                        </ResponsiveContainer>
                    </Paper>
                    {placeholder}
                </Col>
            </Row>
        </Container >

    );
}

export default chartContainer
