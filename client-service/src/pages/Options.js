import React, { Suspense, lazy } from 'react'
import Spinner from '../containers/spinner/spinner'

const Container = lazy(() => import('../containers/layout/container'))
const Row = lazy(() => import('../containers/layout/row'))
const Col = lazy(() => import('../containers/layout/col'))

const OptionsTable = lazy(() => import('../containers/optionsTable/layout'))


const Stock = () => {
    return (
        <div style={{ backgroundColor: "#EEF5F9" }}>
            <Suspense fallback={<Spinner></Spinner>}>
                <div style={{ 'minHeight': '95vh' }}>
                    <Container>
                        <Row>
                            <Col><OptionsTable /></Col>
                        </Row>
                    </Container>
                </div>
            </Suspense>
        </div>
    )
}

export default Stock