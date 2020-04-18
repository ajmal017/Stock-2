import React, { Fragment } from 'react'
import { Paper } from '@material-ui/core'
import { Container, Row, Col } from 'react-bootstrap'
import TrendingUpRoundedIcon from '@material-ui/icons/TrendingUpRounded';
import TrendingDownRoundedIcon from '@material-ui/icons/TrendingDownRounded';
import style from './style.module.css'
import { green } from '@material-ui/core/colors';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

const Card = ({ data, icn, blur, handleDelete }) => {
    let icon = null
    if (icn && data.price_change_value >= 0) icon = <TrendingUpRoundedIcon style={{ color: green[500] }} fontSize='large' />
    if (icn && data.price_change_value <= 0) icon = <TrendingDownRoundedIcon color='error' fontSize='large' />
    let placeholder = null
    if (blur) placeholder = <p className={style.placeholder}>Select a company</p>
    return (
        <Fragment>
            <Paper elevation={11} className={blur ? style.blur : style.paper} data-testid='card'>
                <Container fluid className={style.container}>
                    <Row className={style.row}>
                        <DeleteForeverOutlinedIcon data-testid='remove' onClick={e => { handleDelete(e, data.ticker) }} color="error" style={{ 'cursor': 'pointer' }}></DeleteForeverOutlinedIcon>

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
            {placeholder}
        </Fragment >
    )
}

export default Card
