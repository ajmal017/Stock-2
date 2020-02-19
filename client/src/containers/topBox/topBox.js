import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import style from './style.module.css'

const topBox = () => {
    return (
        <Container fluid className={style.container}>
            <Row className={style.row}>
                <Col md={8} lg={6}>
                    <p className={style.text}>Build your own stock portfolios and compare them against  market Indexes so you can make informed decisions based on  risk and return ratios. We use historical data and financial models </p>
                </Col>
            </Row>
        </Container>
    )
}

export default topBox