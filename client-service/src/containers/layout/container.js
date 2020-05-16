import React from 'react'
import { Container } from 'react-bootstrap'

const row = (props) => {
    return (
        <Container fluid data-testid='linecharts'>
            {props.children}
        </Container>
    )
}

export default row
