import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import HistoricPrice from '../historicPrice/historicPrice'
import HistoricPriceNorm from '../historicPriceNorm/historicPriceNorm'
import StockOptions from '../stockOptions/stockOptions'

const LinePlots = () => {
    return (
        <Container fluid  >
            <Row style={{ justifyContent: 'center' }}>
                <Col xl={6} style={{ 'padding': 0 }} >
                    <HistoricPrice></HistoricPrice>
                </Col>
                <Col xl={6} style={{ 'padding': 0 }} >
                    <HistoricPriceNorm></HistoricPriceNorm>
                </Col>
            </Row>
            <Row style={{ justifyContent: 'center' }}>
                <Col style={{ 'padding': 0 }} >
                    <StockOptions></StockOptions>
                </Col>
            </Row>
        </Container>
    )
}

export default LinePlots