import React from 'react'
import Modal from '../modal/modalContainer'
import { Container, Image, Row } from 'react-bootstrap'
import { Button } from '@material-ui/core'
import RomoclubLogo from '../navbr/logo.png'
import style from './style.module.css'
import axios from 'axios'

const auhtModal = () => {
    const authenticateApi = async () => {
        axios.get('identity/google')

    }
    return (
        <Modal title='Sign in to' button='Log in/Register'>
            <Container fuild className={style.cont}>
                <Row>

                    <Image roundedCircle className={style.img} src={RomoclubLogo}></Image>
                    <Button color='primary' variant='contained' fullWidth onClick={authenticateApi} >
                        Google
                    </Button >
                </Row>
            </Container>
        </Modal>


    )
}

export default auhtModal