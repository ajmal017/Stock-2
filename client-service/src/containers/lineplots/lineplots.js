import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import HistoricPrice from '../historicPrice/historicPrice'
import HistoricPriceChange from '../PriceChange/priceChange'
import HistoricPriceNorm from '../historicPriceNorm/historicPriceNorm'

const PricePlots = () => {
    return (
        <Container fluid >
            <Row style={{ justifyContent: 'center' }}>
                <Col lg={6}  >
                    <HistoricPrice></HistoricPrice>
                </Col>
                <Col lg={6}  >
                    <HistoricPriceNorm></HistoricPriceNorm>
                </Col>
            </Row>
            <Row style={{ justifyContent: 'center' }}>
                <Col lg={6} >
                    <HistoricPriceChange></HistoricPriceChange>
                </Col>
            </Row>
        </Container>
    )
}

export default PricePlots