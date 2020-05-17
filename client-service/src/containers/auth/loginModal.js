import React from 'react'
import { Container, Image, Row } from 'react-bootstrap'
import { Button, TextField } from '@material-ui/core'
import RomoclubLogo from '../navbr/logo.png'
import style from './style.module.css'

const Login = ({ handleChange, state, handleLogin, loginValidator }) => {

    return (
        <Container className={style.cont}>
            <form onSubmit={handleLogin}>
                <Row className={style.row}><Image roundedCircle className={style.img} src={RomoclubLogo}></Image></Row>
                <Row className={style.row}><TextField autoFocus required error={state.email.length < 3} type='email' margin='dense' fullWidth name='email' value={state.email} onChange={handleChange} label='Email' placeholder='Email'></TextField></Row>
                <Row className={style.row}><TextField required error={state.password.length < 6} helperText="Minimum length of 6 characters" type='password' margin='dense' fullWidth name='password' value={state.password} onChange={handleChange} label='Password' placeholder='Password'></TextField></Row>
                <Row className={style.row}>
                    <Button color='primary' variant='contained' fullWidth onClick={handleLogin} disabled={loginValidator} >
                        Submit
                    </Button >
                </Row>
            </form>
        </Container>


    )
}

export default Login