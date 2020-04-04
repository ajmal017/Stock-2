import React from 'react'
import { Paper } from '@material-ui/core'
import { Container, Row, Col } from 'react-bootstrap'
import TrendingUpRoundedIcon from '@material-ui/icons/TrendingUpRounded';
import TrendingDownRoundedIcon from '@material-ui/icons/TrendingDownRounded';
import style from './style.module.css'
import { green } from '@material-ui/core/colors';
import CircularProgress from '@material-ui/core/CircularProgress';
import TP from '../../charts/tooltip/tooltip'


const Card = ({ changePct, name, value, icn, loading, tooltip }) => {
    let icon = null
    if (!!icn && changePct >= 0) icon = <TrendingUpRoundedIcon style={{ color: green[500] }} fontSize='large' />
    if (icn && changePct <= 0) icon = <TrendingDownRoundedIcon color='secondary' fontSize='large' />
    let spinner = null
    if (loading) spinner = <CircularProgress size={20}></CircularProgress>

    return (
        <Paper elevation={11} className={style.paper}>
            <Container fluid className={style.container}>
                <Row className={style.topRow}>
                    <h4 className={style.symbol}> {name} <TP tooltip={tooltip}></TP>
                        {icon}
                        {spinner}
                    </h4>

                </Row>
                <Row className={style.middleRow}>
                    <h5 className={style.price}> {value}</h5>
                    <p className={changePct < 0 ? style.negative : style.positive}>{changePct}</p>

                </Row>
            </Container>
        </Paper>
    )
}

export default Card
