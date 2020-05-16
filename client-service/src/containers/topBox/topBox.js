import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import style from './style.module.css'
import PortfolioCard from './card/card'
import StockForm from '../stockform/stockForm'
import TableContainer from '../charts/table/tableContainer'
import logic from './logic'

const TopBox = () => {
    const { loading, rows, stocks, placeholder } = logic()

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

            <Row className={style.row}>
                <Col lg={6} >
                    <TableContainer
                        title="Portfolio Metrics"
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