import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Table from '../charts/table/tableContainer'


const Portfolio = () => {
    return (
        <Fragment>
            <Container fluid>
                <Row>
                    <Col>
                        <Table tooltip='Optimal Risk Adjusted' loading={false} blur={false} columns={['Name', 'Return', 'Volatility', 'Sharpe']} title='Optimal Risk Adjusted' rows={[]} pl='Text' ></Table>
                    </Col>
                    <Col>
                        <Table tooltip='Minimal Volatility' loading={false} blur={false} columns={['Name', 'Return', 'Volatility', 'Sharpe']} title='Minimal Volatility' rows={[]} pl='Text' ></Table>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Portfolio
