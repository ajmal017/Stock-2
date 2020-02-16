import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import LineChart from './lineChart/lineChart'

const layout = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <LineChart></LineChart>
                </Col>
            </Row>
        </Container>
    )
}

export default layout
