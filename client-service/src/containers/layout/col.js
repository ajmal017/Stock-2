import React from 'react'
import { Col } from 'react-bootstrap'

const col = (props) => {
    return (
        <Col xl={6} style={{ 'padding': 0 }} >
            {props.children}
        </Col>
    )
}

export default col
