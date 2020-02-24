import React, { Fragment } from 'react'
import HistoricPrice from './historicPrice/historicPrice'
import PriceChange from './PriceChange/priceChange'
import TopBox from './topBox/topBox'
import Form from './stockform/stockForm'
import StockCard from './stockCard/stockCard'
import Chips from './chips/chip'
import RiskReturnBarplot from './riskReturn/layout'


const layout = () => {
    return (
        <div style={{ backgroundColor: "#EEF5F9" }}>
            <TopBox></TopBox>
            <Chips></Chips>
            <Form></Form>
            <StockCard></StockCard>
            <HistoricPrice></HistoricPrice>
            <PriceChange></PriceChange>
            <RiskReturnBarplot></RiskReturnBarplot>
        </div>

    )
}

export default layout
