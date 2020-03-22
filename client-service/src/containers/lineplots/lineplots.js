import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import HistoricPrice from '../historicPrice/historicPrice'
import HistoricPriceNorm from '../historicPriceNorm/historicPriceNorm'

const PricePlots = () => {
    return (
        <Container fluid >
            <Row style={{ justifyContent: 'center' }}>
                <Col xl={6}  >
                    <HistoricPrice></HistoricPrice>
                </Col>
                <Col xl={6}  >
                    <HistoricPriceNorm></HistoricPriceNorm>
                </Col>
            </Row>
        </Container>
    )
}

export default PricePlots