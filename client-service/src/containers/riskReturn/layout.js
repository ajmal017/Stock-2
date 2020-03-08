import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RiskReturnBarPlot from './riskReturnBarplot'


const layout = () => {
    return (
        <Container fluid>
            <Row style={{ justifyContent: 'center' }}>
                <Col lg={6} xl={4} >
                    <RiskReturnBarPlot></RiskReturnBarPlot>
                </Col>
            </Row>
        </Container>
    )
}

export default layout