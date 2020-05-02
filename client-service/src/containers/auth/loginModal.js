import React, { useState } from 'react'
import Modal from '../modal/modalContainer'
import { Container, Image, Row, Col } from 'react-bootstrap'
import { Button, TextField } from '@material-ui/core'
import RomoclubLogo from '../navbr/logo.png'
import style from './style.module.css'
import logic from './logic'

const AuhtModal = () => {
    const { handleChange, state, handleLogin } = logic()

    return (
        <Modal title='Sign in to' button='Log in' color='primary' variant='text'>
            <Container fluid className={style.cont}>
                <form ></form>
                <Row className={style.row}><Image roundedCircle className={style.img} src={RomoclubLogo}></Image></Row>
                <Row className={style.row}><TextField type='email' margin='dense' fullWidth name='email' value={state.email} onChange={handleChange} label='Email' placeholder='Email'></TextField></Row>
                <Row className={style.row}><TextField type='password' margin='dense' fullWidth name='password' value={state.password} onChange={handleChange} label='Password' placeholder='Password'></TextField></Row>
                <Row className={style.row}>
                    <Button color='primary' variant='contained' fullWidth onClick={handleLogin} >
                        Submit
                    </Button >
                </Row>
            </Container>
        </Modal>


    )
}

export default AuhtModal