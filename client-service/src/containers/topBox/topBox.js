import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import style from './style.module.css'
import PortfolioCard from '../card/card'
import { useSelector } from 'react-redux'

const TopBox = () => {
    const data = useSelector(state => state.portfolioReducer.portfolio)
    
    return (
        <Container fluid className={style.container}>
            <Row className={style.row}>
                <Col md={8} lg={8} xl={6}>
                    <p className={style.text}>Build your own stock portfolios and compare them against  market Indexes so you can make informed decisions based on  risk and return ratios. We use historical data and financial models </p>
                </Col>
            </Row>
            <Row className={style.row}>
                <Col md={6} lg={4} xl={3}>
                    <PortfolioCard data={data}
                        name="Portfolio Returns"
                        value={data.returns}
                        changePct={data.returnsChange}
                        typ='Returns'
                    ></PortfolioCard>
                </Col>
                <Col md={6} lg={4} xl={3}>
                    <PortfolioCard data={data}
                        name="Portfolio Volatility"
                        value={data.volatility}
                        changePct={data.volatilityChange}
                        typ='Volatility'

                    ></PortfolioCard>
                </Col>
            </Row>
        </Container>
    )
}

export default TopBox