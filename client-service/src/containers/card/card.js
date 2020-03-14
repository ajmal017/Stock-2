import React from 'react'
import { Paper } from '@material-ui/core'
import { Container, Row, Col } from 'react-bootstrap'
import TrendingUpRoundedIcon from '@material-ui/icons/TrendingUpRounded';
import TrendingDownRoundedIcon from '@material-ui/icons/TrendingDownRounded';
import style from './style.module.css'
import { green } from '@material-ui/core/colors';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';


const Card = ({ data, name, value }) => {
    const trend = data.changePercent
    const tradingVol = data.volume.toLocaleString()
    let icon = null
    if (trend > 0) icon = <TrendingUpRoundedIcon style={{ color: green[500] }} fontSize='large' />
    else icon = <TrendingDownRoundedIcon color='secondary' fontSize='large' />;
    return (
        <Paper elevation={11} className={style.paper}>
            <Container fluid className={style.container}>
                <Row className={style.topRow}>
                    <h5 className={style.symbol}> {name}</h5>
                    {icon}
                </Row>
                <Row className={style.middleRow}>
                    <h4 className={style.price}>$ {value}</h4>
                    <p className={data.change < 0 ? style.negative : style.positive}>{data.change}</p>
                </Row>
                <Row className={style.buttonRow}>
                    <p className={data.change < 0 ? style.negative : style.positive}>Price: {data.changePercent}%</p>
                    <p className={style.vol}>Trading volume: {tradingVol}</p>
                </Row>
            </Container>
        </Paper>
    )
}

export default Card
