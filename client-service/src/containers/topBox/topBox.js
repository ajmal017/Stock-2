import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import style from './style.module.css'
import PortfolioCard from '../card/card'
import { useSelector } from 'react-redux'

const TopBox = () => {
    const data = useSelector(state => state.portfolioReducer.portfolio)

    console.log('topbos', data)

    return (
        <Container fluid className={style.container}>
            <Row className={style.row}>
                <Col md={8} lg={6}>
                    <p className={style.text}>Build your own stock portfolios and compare them against  market Indexes so you can make informed decisions based on  risk and return ratios. We use historical data and financial models </p>
                </Col>
            </Row>
            <Row className={style.row}>
                <Col md={6} lg={4}>
                    <PortfolioCard data={data} name="Portfolio Returns" value={data.returns}></PortfolioCard>
                </Col>
                <Col md={6} lg={4}>
                    <PortfolioCard data={data} name="Portfolio Volatility" value={data.volatility}></PortfolioCard>
                </Col>
            </Row>
        </Container>
    )
}

export default TopBox