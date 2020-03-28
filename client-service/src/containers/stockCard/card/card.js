import React from 'react'
import { Paper } from '@material-ui/core'
import { Container, Row, Col } from 'react-bootstrap'
import TrendingUpRoundedIcon from '@material-ui/icons/TrendingUpRounded';
import TrendingDownRoundedIcon from '@material-ui/icons/TrendingDownRounded';
import style from './style.module.css'
import { green } from '@material-ui/core/colors';


const Card = ({ data, icn }) => {
    let icon = null
    if (icn && data.price_change_value >= 0) icon = <TrendingUpRoundedIcon style={{ color: green[500] }} fontSize='large' />
    if (icn && data.price_change_value <= 0) icon = <TrendingDownRoundedIcon color='secondary' fontSize='large' />

    return (
        <Paper elevation={11} className={style.paper}>
            <Container fluid className={style.container}>
                <Row className={style.row}>
                    <h3 className={style.symbol}> {data.ticker}</h3>
                    {icon}
                </Row>
                <Row className={style.row}>
                    <div>
                        <h4 className={style.price}>${data.price.toLocaleString()} </h4>
                        <p className={data.price_change_value < 0 ? style.negative : style.positive}>{data.price_change_value > 0 ? '+' : '-'}{data.price_change_value.toLocaleString()}</p>
                    </div>
                    <p className={data.price_change_value < 0 ? style.negative : style.positive}>{data.price_change_value > 0 ? '+' : '-'}{data.price_change_pct}%</p>
                </Row>
                <Row className={style.row}>
                    <div>
                        <p className={style.price}>vol. {data.volume.toLocaleString()}</p>
                        <p className={data.volume_change_value < 0 ? style.negative : style.positive}>{data.volume_change_value > 0 ? '+' : '-'}{data.volume_change_value.toLocaleString()}</p>
                    </div>
                    <p className={style.price}>β {data.beta}</p>


                </Row>
            </Container>
        </Paper>
    )
}

export default Card