import React from 'react'
import { CircularProgress } from '@material-ui/core'
import style from './style.module.css'
import { Container } from 'react-bootstrap'

const spinner = () => {
    return (
        <Container className={style.container}>
            <CircularProgress size={80} className={style.spinner} color="primary"></CircularProgress>
        </Container>
    )
}

export default spinner