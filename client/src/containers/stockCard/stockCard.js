import React from 'react'
import logic from './logic'
import { Card, CardContent, Paper } from '@material-ui/core'
import { Container, Row, Col } from 'react-bootstrap'
import TrendingUpRoundedIcon from '@material-ui/icons/TrendingUpRounded';
import TrendingDownRoundedIcon from '@material-ui/icons/TrendingDownRounded';
import style from './style.module.css'
import { green } from '@material-ui/core/colors';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

const StockCard = ({ data, handleDelete }) => {
    const trend = data.changePercent
    const tradingVol = data.volume.toLocaleString()
    let icon = null
    if (trend > 0) icon = <TrendingUpRoundedIcon style={{ color: green[500] }} fontSize='large' />
    else icon = <TrendingDownRoundedIcon color='secondary' fontSize='large' />;
    return (
        <Paper elevation={11} className={style.paper}>
            <Container fluid className={style.container}>

                <Row className={style.topRow}>
                    <p className={style.symbol}> <DeleteForeverOutlinedIcon color='secondary' onClick={() => handleDelete(data.symbol)} />

                        {data.symbol}</p>
                    {icon}
                </Row>
                <Row className={style.middleRow}>
                    <h4 className={style.price}>$ {data.close}</h4>
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



const StockCards = () => {
    const { stocks, handleDelete } = logic()

    return (
        <Container fluid className={style.section}>
            <Row>
                {Object.entries(stocks).map(([key, value]) => (
                    <Col md={6} lg={4} xl={3} className={style.col}>
                        <StockCard data={value} handleDelete={handleDelete}></StockCard>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}


export default StockCards

