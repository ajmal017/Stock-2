import React, { useState, Fragment } from 'react'
import { Button, } from '@material-ui/core'
import Register from './registerModal'
import Login from './loginModal'
import { Container, Row } from 'react-bootstrap'
import style from './style.module.css'
import logic from './logic'


const AuhtModal = (props) => {
    const [login, setLogin] = useState(true)
    const { handleChange, state, handleLogin, loginValidator, handleRegister, registerValidator } = logic()

    return (
        <Fragment>
            {login ? (<Login handleChange={handleChange} state={state} handleLogin={handleLogin} loginValidator={loginValidator} />) : (<Register handleChange={handleChange} state={state} handleRegister={handleRegister} registerValidator={registerValidator} />)}
            <Container className={style.cont}>
                <Row className={style.row}>
                    <Button variant='text' color='secondary' size='small' fullWidth={false} onClick={() => setLogin(!login)}>{login ? 'register here' : 'login to your account'}</Button>
                </Row>
            </Container>
        </Fragment>

    )
}

export default AuhtModal