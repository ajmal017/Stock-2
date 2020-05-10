import React, { Suspense, lazy } from 'react'
import Spinner from '../spinner/spinner'
import logic from './logic'
import { Container, Row, Col } from 'react-bootstrap'
import LineChart from '../charts/lineChart/lineChart'

const TopBox = lazy(() => import('../topBox/topBox'))
const Toast = lazy(() => import('../toast/toast'))
const StockCard = lazy(() => import('../stockCard/stockCard'))


const Layout = () => {
    const { stocks, rollingVolatility, cumulativeReturns } = logic()
    return (
        <div style={{ backgroundColor: "#EEF5F9" }}>
            <Suspense fallback={<Spinner></Spinner>}>
                <Toast></Toast>
                <TopBox></TopBox>
                <StockCard></StockCard>
                <Container fluid data-testid='linecharts' >
                    <Row style={{ justifyContent: 'center' }}>
                        <Col xl={6} style={{ 'padding': 0 }} >
                            <LineChart
                                blur={stocks.length < 1}
                                title='Stocks Cumulative Log Returns'
                                tooltip='Cumulative daily log returns of the stocks every 6 months'
                                data={cumulativeReturns}
                                stocks={stocks}
                                dataKey="date"
                                tickFormatter
                            ></LineChart>
                        </Col>
                        <Col xl={6} style={{ 'padding': 0 }} >
                            <LineChart
                                blur={stocks.length < 1}
                                title='Stocks Volatility'
                                tooltip='Volatility of stocks every 6 months'
                                data={rollingVolatility}
                                stocks={stocks}
                                dataKey="date"
                                tickFormatter
                            ></LineChart>
                        </Col>
                    </Row>
                    <Row style={{ justifyContent: 'center' }}>
                        <Col xl={6} style={{ 'padding': 0 }} >
                            <LineChart
                                placeholder='Select 2 Companies'
                                blur={stocks.length < 2}
                                title='Portfolio Cumulative Log Returns'
                                tooltip='Cumulative daily log returns of the portfolio every 6 months'
                                data={cumulativeReturns}
                                stocks={['equal', 'optimal', 'minimal']}
                                dataKey="date"
                                tickFormatter
                            ></LineChart>
                        </Col>
                        <Col xl={6} style={{ 'padding': 0 }} >
                            <LineChart
                                placeholder='Select 2 Companies'
                                blur={stocks.length < 2}
                                title='Portfolio Volatility'
                                tooltip='Volatility of portfolio every 6 months'
                                data={rollingVolatility}
                                stocks={['equal', 'optimal', 'minimal']}
                                dataKey="date"
                                tickFormatter
                            ></LineChart>
                        </Col>
                    </Row>
                </Container>
            </Suspense>
        </div>
    )
}


export default Layout


// import React, { Fragment } from 'react'
// import { Container, Row, Col } from 'react-bootstrap'
// import Table from '../charts/table/tableContainer'


// const Portfolio = () => {
//     return (
//         <Fragment>
//             <Container fluid>
//                 <Row>
//                     <Col>
//                         <Table tooltip='Optimal Risk Adjusted' loading={false} blur={false} columns={['Name', 'Return', 'Volatility', 'Sharpe']} title='Optimal Risk Adjusted' rows={[]} pl='Text' ></Table>
//                     </Col>
//                     <Col>
//                         <Table tooltip='Minimal Volatility' loading={false} blur={false} columns={['Name', 'Return', 'Volatility', 'Sharpe']} title='Minimal Volatility' rows={[]} pl='Text' ></Table>
//                     </Col>
//                 </Row>
//             </Container>
//         </Fragment>
//     )
// }

// export default Portfolio