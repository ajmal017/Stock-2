import React from 'react'
import logic from './logic'
import { Container, Row, Col } from 'react-bootstrap'
import style from './style.module.css'
import StockCard from './card/card'
import { stockDetails } from '../../redux/actions'

const StockCards = () => {
    const { stocks, handleDelete } = logic()
    if (stocks.length < 1) return (
        <Col md={6} lg={4} xl={3} className={style.col}>
            <StockCard data={dummyData} icn={true} blur={true}></StockCard>
        </Col>
    )
    else
        return (
            <Container fluid className={style.section}>
                <Row>
                    {stocks.map((item, i) => (
                        <Col md={6} lg={4} xl={3} className={style.col}>
                            <StockCard data={item} icn={true}></StockCard>
                        </Col>
                    ))}
                </Row>
            </Container>
        )
}

const dummyData = {
    ticker: 'FAKE',
    price_change_value: 0,
    price_change_pct: 0,
    price: 0,
    volume_change_value: 0,
    volume: 0,
}


export default StockCards

