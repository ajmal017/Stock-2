import React, { Suspense, lazy } from 'react'
import Spinner from '../containers/spinner/spinner'

const Container = lazy(() => import('../containers/layout/container'))
const Row = lazy(() => import('../containers/layout/row'))
const Col = lazy(() => import('../containers/layout/col'))

const HistoryPrice = lazy(() => import('../containers/historicPrice/historicPrice'))
const HistoryPriceNormalized = lazy(() => import('../containers/historicPriceNorm/historicPriceNorm'))
const StockCard = lazy(() => import('../containers/stockCard/stockCard'))
const StockCumulativeReturnsRolling = lazy(() => import('../containers/stockCumulativeReturnsRolling/layout'))
const StockVolatilityRolling = lazy(() => import('../containers/stockVolatilityRolling/layout'))
const StockRiskReturns = lazy(() => import('../containers/stockVolatilityReturns/layout'))

const Stock = () => {
    return (
        <div style={{ backgroundColor: "#EEF5F9" }}>
            <Suspense fallback={<Spinner></Spinner>}>
                <StockCard></StockCard>
                <Container>
                    <Row>
                        <Col><HistoryPrice /></Col>
                        <Col><HistoryPriceNormalized /></Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col><StockCumulativeReturnsRolling /></Col>
                        <Col><StockVolatilityRolling /></Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col><StockRiskReturns /></Col>
                    </Row>
                </Container>
            </Suspense>
        </div>
    )
}

export default Stock