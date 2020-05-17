import React from 'react'
import { Col } from 'react-bootstrap'
import Div from './div'

const col = (props) => {
    return (
        <Col xl={6} style={{}}{...props}>
            <Div>
                {props.children}
            </Div>
        </Col>
    )
}

export default col
