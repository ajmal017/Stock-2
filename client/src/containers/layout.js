import React, { Fragment } from 'react'
import LineChart from './lineChart/lineChart'
import TopBox from './topBox/topBox'
import Form from './stockform/stockForm'
import Chips from './chips/chip'


const layout = () => {
    return (
        <Fragment>
            <TopBox></TopBox>
            <Chips></Chips>
            <Form></Form>
            <LineChart></LineChart>
        </Fragment>

    )
}

export default layout
