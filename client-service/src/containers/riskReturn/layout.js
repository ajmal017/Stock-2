import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RiskReturnBarPlot from './riskReturnBarplot'
import EfficientFrontierScatter from '../efficientFrontier/efficientFrontier'


const layout = () => {
    return (
        <Container fluid>
            <Row style={{ justifyContent: 'center', 'padding': 0 }}>
                <Col xl={6} style={{ 'padding': 0 }} >
                    <RiskReturnBarPlot></RiskReturnBarPlot>
                </Col>
                <Col xl={6} style={{ 'padding': 0 }} >
                    <EfficientFrontierScatter></EfficientFrontierScatter>
                </Col>
            </Row>
        </Container>
    )
}

export default layout