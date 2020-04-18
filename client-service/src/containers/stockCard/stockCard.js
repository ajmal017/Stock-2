import React from 'react'
import logic from './logic'
import { Container, Row, Col } from 'react-bootstrap'
import style from './style.module.css'
import StockCard from './card/card'
import { dummyData } from './data'

const StockCards = () => {
    const { stocks, handleDelete } = logic()
    if (stocks.length < 1) return (
        <Col md={6} lg={4} xl={3} className={style.col}>
            <StockCard data-testid="dummy-card" data={dummyData} icn={true} blur={true}></StockCard>
        </Col>
    )
    else
        return (
            <Container fluid className={style.section}>
                <Row>
                    {stocks.map((item, i) => (
                        <Col md={6} lg={4} xl={3} className={style.col} key={item.ticker}>
                            <StockCard data={item} icn={true} handleDelete={handleDelete}></StockCard>
                        </Col>
                    ))}
                </Row>
            </Container>
        )
}

export default StockCards

