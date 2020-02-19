import React, { Fragment } from 'react'
import LineChart from './lineChart/lineChart'
import TopBox from './topBox/topBox'
import Form from './stockform/stockForm'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const layout = () => {
    return (
        <Fragment>
            <TopBox></TopBox>
            <Form></Form>
            <LineChart></LineChart>
        </Fragment>

    )
}

export default layout
