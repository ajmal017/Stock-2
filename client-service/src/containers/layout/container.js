import React from 'react'
import { Container } from 'react-bootstrap'

const defaultStyle = {
    backgroundColor: '#F7F8FC'
}

const container = (props) => {
    const style = { ...defaultStyle, ...props.style, }
    return (
        <Container fluid data-testid='linecharts' style={style} >
            {props.children}
        </Container >
    )
}


export default container
