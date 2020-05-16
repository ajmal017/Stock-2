import React from 'react'
import { Container, Row } from 'react-bootstrap'

const row = (props) => {
    return (
        <Row style={{ justifyContent: 'center' }}>
            {props.children}
        </Row>
    )
}

export default row
