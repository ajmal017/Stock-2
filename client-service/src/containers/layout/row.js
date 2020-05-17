import React from 'react'
import { Row } from 'react-bootstrap'

const row = (props) => {
    return (
        <Row style={{ justifyContent: props.align || 'center' }} {...props}>
            {props.children}
        </Row>
    )
}

export default row
