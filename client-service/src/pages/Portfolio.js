import React, { Suspense, lazy } from 'react'
import Spinner from '../containers/spinner/spinner'

const Container = lazy(() => import('../containers/layout/container'))
const Row = lazy(() => import('../containers/layout/row'))
const Col = lazy(() => import('../containers/layout/col'))

const EfficientFrontier = lazy(() => import('../containers/efficientFrontier/efficientFrontier'))
const PortfolioRollingVolatility = lazy(() => import('../containers/portfolioRollingVolatility/layout'))
const PortfolioCumulativeReturns = lazy(() => import('../containers/portfolioCumulativeReturns/layout'))
const PortfolioOptimalDistr = lazy(() => import('../containers/portfolioOptimalDistr/layout'))
const PortfolioMinimallDistr = lazy(() => import('../containers/portfolioMinimalDistr/layout'))

const Portfolio = () => {
    return (
        <div style={{ backgroundColor: "#EEF5F9" }}>
            <Suspense fallback={<Spinner></Spinner>}>
                <Container>
                    <Row>
                        <Col><PortfolioRollingVolatility /></Col>
                        <Col><PortfolioCumulativeReturns /></Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col><PortfolioOptimalDistr /></Col>
                        <Col><PortfolioMinimallDistr /></Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col><EfficientFrontier /></Col>
                    </Row>
                </Container>
            </Suspense>
        </div>
    )
}

export default Portfolio
