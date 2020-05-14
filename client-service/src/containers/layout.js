import React, { Suspense, lazy } from 'react'
import Spinner from './spinner/spinner'
const TopBox = lazy(() => import('./topBox/topBox'))
const StockCard = lazy(() => import('./stockCard/stockCard'))
const PricePlots = lazy(() => import('./lineplots/lineplots'))
const RiskReturnBarplot = lazy(() => import('./riskReturn/layout'))
const OptionsTable = lazy(() => import('./optionsTable/optionsTable'))
const PortofolioDistribution = lazy(() => import('./optimalPortfolio/layout'))

const Layout = () => {
    return (
        <div style={{ backgroundColor: "#EEF5F9" }}>
            <Suspense fallback={<Spinner></Spinner>}>
                <TopBox></TopBox>
                <StockCard></StockCard>
                <PricePlots></PricePlots>
                <RiskReturnBarplot></RiskReturnBarplot>
                <PortofolioDistribution></PortofolioDistribution>
                <OptionsTable></OptionsTable>
            </Suspense>
        </div>
    )
}

export default Layout
