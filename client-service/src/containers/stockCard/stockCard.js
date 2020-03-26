import React from 'react'
import logic from './logic'
import { Container, Row, Col } from 'react-bootstrap'
import style from './style.module.css'
import StockCard from './card/card'

const StockCards = () => {
    const { stocks, handleDelete } = logic()

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


export default StockCards

