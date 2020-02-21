import React, { Fragment } from 'react'
import LineChart from './lineChart/lineChart'
import TopBox from './topBox/topBox'
import Form from './stockform/stockForm'
import Chips from './chips/chip'
import StockCard from './stockCard/stockCard'


const layout = () => {
    return (
        <Fragment>
            <TopBox></TopBox>
            <Form></Form>
            <StockCard></StockCard>
            <LineChart></LineChart>
        </Fragment>

    )
}

export default layout
