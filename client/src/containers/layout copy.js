import React from 'react'
import PricePlots from './lineplots/lineplots'

import TopBox from './topBox/topBox'
import Form from './stockform/stockForm'
import StockCard from './stockCard/stockCard'
import Chips from './chips/chip'
import RiskReturnBarplot from './riskReturn/layout'
import Spinner from './spinner/spinner'
import { useSelector } from 'react-redux'


const Layout = () => {
    const loading = useSelector(state => state.stockReducer.loading)
    // if (loading) return <Spinner></Spinner>
    // else {
    return (
        <div style={{ backgroundColor: "#EEF5F9" }}>
            <TopBox></TopBox>
            <Chips></Chips>
            <Form></Form>
            <StockCard></StockCard>
            <PricePlots></PricePlots>
            <RiskReturnBarplot></RiskReturnBarplot>
        </div>
    )
}
// }

export default Layout
