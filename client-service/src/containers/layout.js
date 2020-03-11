import React, { Suspense, lazy } from 'react'
import { useSelector } from 'react-redux'
import Spinner from './spinner/spinner'

const TopBox = lazy(() => import('./topBox/topBox'))
const Chips = lazy(() => import('./chips/chip'))
const Form = lazy(() => import('./stockform/stockForm'))
// const StockCard = lazy(() => import('./stockCard/stockCard'))
const PricePlots = lazy(() => import('./lineplots/lineplots'))
const RiskReturnBarplot = lazy(() => import('./riskReturn/layout'))

const Layout = () => {
    const loading = useSelector(state => state.stockReducer.loading)
    if (loading) return <Spinner></Spinner>
    else {
        return (
            <div style={{ backgroundColor: "#EEF5F9" }}>
                <Suspense fallback={<Spinner></Spinner>}>
                    <TopBox></TopBox>
                    <Chips></Chips>
                    <Form></Form>
                    {/* <StockCard></StockCard> */}
                    <PricePlots></PricePlots>
                    <RiskReturnBarplot></RiskReturnBarplot>
                </Suspense>
            </div>
        )
    }
}

export default Layout
