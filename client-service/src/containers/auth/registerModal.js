import React, { useState } from 'react'
import Modal from '../modal/modalContainer'
import { Container, Image, Row, Col } from 'react-bootstrap'
import { Button, TextField } from '@material-ui/core'
import RomoclubLogo from '../navbr/logo.png'
import style from './style.module.css'
import logic from './logic'

const AuhtModal = () => {
    const { handleChange, state, handleRegister } = logic()

    return (
        <Modal title='Sign in to' button='Register' color='secondary' variant='text'>
            <Container fuild className={style.cont}>
                <form onSubmit={() => { }}></form>
                <Row className={style.row}><Image roundedCircle className={style.img} src={RomoclubLogo}></Image></Row>
                <Row className={style.row}><TextField type='email' margin='dense' fullWidth name='email' value={state.email} onChange={handleChange} label='Email' placeholder='Email'></TextField></Row>
                <Row className={style.row}><TextField type='password' margin='dense' fullWidth name='password' value={state.password} onChange={handleChange} label='Password' placeholder='Password'></TextField></Row>
                <Row className={style.row}><TextField margin='dense' fullWidth name='password2' value={state.password2} onChange={handleChange} label='Password' placeholder='Repeat Password'></TextField></Row>
                <Row className={style.row}>
                    <Button color='primary' variant='contained' fullWidth onClick={handleRegister} >
                        Submit
                    </Button >
                </Row>
            </Container>
        </Modal>


    )
}

export default AuhtModal