import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import style from './style.module.css'
import PortfolioCard from './card/card'
import StockForm from '../stockform/stockForm'
import TableContainer from '../charts/table/tableContainer'
import logic from './logic'

const TopBox = () => {
    const { equal, loading, rows, stocks, placeholder } = logic()


    return (
        <Container fluid className={style.container}>
            <Row className={style.row}>
                <Col lg={6}>
                    <p className={style.text}>Select stocks and optmise your portfolio through the application of the Modern Portfolio Theory (MPT)</p>
                </Col>
            </Row>
            <Row className={style.row}>
                <Col lg={6}>
                    <StockForm></StockForm>
                </Col>
            </Row>
            {/* <Row className={style.row}>
                <Col lg={8} xl={6}>
                    <h1 className={style.title}>Portfolio Metrics</h1>
                </Col>
            </Row>
            <Row className={style.row}>
                <Col md={6} lg={4} xl={3}>
                    <PortfolioCard data={equal}
                        name="Returns"
                        value={equal.returns.toString() + '%'}
                        changePct={equal.returnsChange.toString() + '%'}
                        icn={true}
                        loading={loading}
                        tooltip="Assumes an equal distribution of the stocks and
                         multiplies the weights by the annualised mean of the (Simple) returns of the stocks"
                    ></PortfolioCard>
                </Col>
                <Col md={6} lg={4} xl={3}>
                    <PortfolioCard data={equal}
                        name="Volatility"
                        value={equal.volatility.toString() + '%'}
                        changePct={equal.volatilityChange.toString() + '%'}
                        icn={true}
                        loading={loading}
                        tooltip="Assumes an equal distribution of the stocks and
                         multiplies the weights by the annualised Standard Deviation of the (Simple) returns of the stocks"

                    ></PortfolioCard>
                </Col>
            </Row>
            <Row className={style.row}>
                <Col md={6} lg={4} xl={3}>
                    <PortfolioCard data={equal}
                        name="Systematic Risk"
                        value={equal.systematicRisk}
                        icn={false}
                        loading={loading}
                        tooltip="Inherent market risk"
                    ></PortfolioCard>
                </Col>
                <Col md={6} lg={4} xl={3}>
                    <PortfolioCard data={equal}
                        name="Idiosyncratic Risk"
                        value={equal.idiosyncraticRisk}
                        icn={false}
                        loading={loading}
                        tooltip="Inherent stock risk "
                    ></PortfolioCard>
                </Col>
            </Row> */}
            <Row className={style.row}>
                <Col lg={6} >
                    <TableContainer
                        title="Portfolio Metrics"
                        value={equal.idiosyncraticRisk}
                        icn={false}
                        loading={loading}
                        tooltip="Compare the returns, volatility and Sharpe ratio of portfolios with different weight distributions.
                    Returns and volatility are calculated using the log returns and their standard deviation."
                        columns={['Distribution Type', 'Returns %', 'Volatility %', 'Sharpe Ratio %']}
                        rows={rows}
                        blur={stocks.length < 2}
                        pl="Select 2+ Companies"
                    />
                </Col>
            </Row>
        </Container >
    )
}

export default TopBox