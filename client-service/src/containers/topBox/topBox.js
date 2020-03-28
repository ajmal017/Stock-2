import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import style from './style.module.css'
import PortfolioCard from '../card/card'
import { useSelector } from 'react-redux'
import Cont from './cont'

const TopBox = () => {
    const data = useSelector(state => state.portfolioMetrics.portfolio)

    return (
        <Container fluid className={style.container}>
            <Row className={style.row}>
                <Col md={8} lg={8} xl={6}>
                    <p className={style.text}>Select stocks and optmise your portfolio through the application of the Modern Portfolio Theory (MPT) and Capital Asset Pricing Model (CAPM) </p>
                </Col>
            </Row>
            <Row className={style.row}>
                <Col lg={8} xl={6}>
                    <Cont value="Portfolio Metrics"></Cont>
                </Col>
            </Row>
            <Row className={style.row}>
                <Col md={6} lg={4} xl={3}>
                    <PortfolioCard data={data}
                        name="Annual Returns"
                        value={data.returns.toString() + '%'}
                        changePct={data.returnsChange.toString() + '%'}
                        icn={true}
                    ></PortfolioCard>
                </Col>
                <Col md={6} lg={4} xl={3}>
                    <PortfolioCard data={data}
                        name="Volatility"
                        value={data.volatility.toString() + '%'}
                        changePct={data.volatilityChange.toString() + '%'}
                        icn={true}
                    ></PortfolioCard>
                </Col>
            </Row>
            <Row className={style.row}>
                <Col md={6} lg={4} xl={3}>
                    <PortfolioCard data={data}
                        name="Systematic Risk"
                        value={data.systematicRisk}
                        icn={false}
                    ></PortfolioCard>
                </Col>
                <Col md={6} lg={4} xl={3}>
                    <PortfolioCard data={data}
                        name="Idiosyncratic Risk"
                        value={data.idiosyncraticRisk}
                        icn={false}
                    ></PortfolioCard>
                </Col>
            </Row>
        </Container>
    )
}

export default TopBox