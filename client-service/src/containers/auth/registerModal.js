import React from 'react'
import { Container, Image, Row } from 'react-bootstrap'
import { Button, TextField } from '@material-ui/core'
import RomoclubLogo from '../navbr/logo.png'
import style from './style.module.css'

const Register = ({ handleChange, state, handleRegister, registerValidator }) => {
    return (
        <Container className={style.cont}>
            <form onSubmit={handleRegister}>
                <Row className={style.row}><Image roundedCircle className={style.img} src={RomoclubLogo}></Image></Row>
                <Row className={style.row}><TextField autoFocus required error={state.email.length < 3} type='email' margin='dense' fullWidth name='email' value={state.email} onChange={handleChange} label='Email' placeholder='Email'></TextField></Row>
                <Row className={style.row}><TextField required error={state.password.length < 6} type='password' helperText="Minimum length of 6 characters" margin='dense' fullWidth name='password' value={state.password} onChange={handleChange} label='Password' placeholder='Password'></TextField></Row>
                <Row className={style.row}><TextField required error={state.password !== state.password2} helperText="Passwords do not match" type='password' margin='dense' fullWidth name='password2' value={state.password2} onChange={handleChange} label='Password' placeholder='Repeat Password'></TextField></Row>
                <Row className={style.row}>
                    <Button color='primary' variant='contained' fullWidth onClick={handleRegister} disabled={registerValidator} >
                        Submit
                    </Button >
                </Row>
            </form>
        </Container>


    )
}

export default Register