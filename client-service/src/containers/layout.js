import React, { Suspense, lazy } from 'react'
import Spinner from './spinner/spinner'

const TopBox = lazy(() => import('./topBox/topBox'))
const StockCard = lazy(() => import('./stockCard/stockCard'))
const PricePlots = lazy(() => import('./lineplots/lineplots'))
const RiskReturnBarplot = lazy(() => import('./riskReturn/layout'))
const Toast = lazy(() => import('./toast/toast'))
const OptionsTable = lazy(() => import('./optionsTable/optionsTable'))
const Layout = () => {


    return (
        <div style={{ backgroundColor: "#EEF5F9" }}>
            <Suspense fallback={<Spinner></Spinner>}>
                <Toast></Toast>
                <TopBox></TopBox>
                <StockCard></StockCard>
                <PricePlots></PricePlots>
                <RiskReturnBarplot></RiskReturnBarplot>
                <OptionsTable></OptionsTable>
            </Suspense>
        </div>
    )
}


export default Layout
