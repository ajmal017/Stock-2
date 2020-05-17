import React from 'react'
import logic from './logic'
import StockCard from './card/card'
import { dummyData } from './data'
import Container from '../layout/container'
import Row from '../layout/row'
import Col from '../layout/col'

const style = {
    paddingTop: '1rem'
}

const StockCards = () => {
    const { stocks, handleDelete } = logic()
    if (stocks.length < 1) return (
        <Container style={style}>
            <Row>
                <Col md={6} lg={4} xl={3} >
                    <StockCard data-testid="dummy-card" data={dummyData} icn={true} blur={true}></StockCard>
                </Col>
            </Row>
        </Container >
    )
    else return (
        <Container style={style} >
            <Row>
                {stocks.map((item, i) => (
                    <Col md={6} lg={4} xl={3} key={item.ticker}>
                        <StockCard data={item} icn={true} handleDelete={handleDelete}></StockCard>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}



export default StockCards

