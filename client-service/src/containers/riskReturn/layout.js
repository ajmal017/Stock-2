import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RiskReturnBarPlot from './riskReturnBarplot'
import EfficientFrontierScatter from '../efficientFrontier/efficientFrontier'


const layout = () => {
    return (
        <Container fluid>
            <Row style={{ justifyContent: 'center' }}>
                <Col lg={6} >
                    <RiskReturnBarPlot></RiskReturnBarPlot>
                </Col>
                <Col lg={6} >
                    <EfficientFrontierScatter></EfficientFrontierScatter>
                </Col>
            </Row>
        </Container>
    )
}

export default layout