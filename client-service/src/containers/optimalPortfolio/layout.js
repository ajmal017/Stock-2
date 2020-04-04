import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logic from './logic'
import Barplot from '../charts/barplot2/barplot'



const layout = () => {
    const { stocks, maxSharpe, loading, minVolatility } = logic()
    console.log(maxSharpe, minVolatility)
    return (
        <Container fluid>
            <Row style={{ justifyContent: 'center', 'padding': 0 }}>
                <Col xl={6} style={{ 'padding': 0 }} >
                    <Barplot data={maxSharpe} keys={stocks} dataKey='ticker'
                        title="Optimal Risk Adjusted Distribution"
                        tooltip="it is based on the Sharpe ratio"
                        loading={loading}
                        blur={stocks.length < 2}
                        bars={[{ dataKey: 'value', labelKey: 'value' }]}
                        placeholder='Select 2+ companies'
                    ></Barplot>
                </Col>
                <Col xl={6} style={{ 'padding': 0 }} >
                    <Barplot data={minVolatility} keys={stocks} dataKey='ticker'
                        title="Minimal Volatility"
                        tooltip="it is based on the Sharpe ratio"
                        loading={loading}
                        blur={stocks.length < 2}
                        bars={[{ dataKey: 'value', labelKey: 'value' }]}
                        placeholder='Select 2+ companies'
                    ></Barplot>
                </Col>
            </Row>
        </Container>
    )
}

export default layout