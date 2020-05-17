import React from 'react'
import Modal from '../modal/modalContainer'
import LoginRegister from './layout'

const AuhtModal = (props) => {
    return (
        <Modal open={props.open} title='Login or Register' button='Login / Register' color='primary' variant='text'>
            <LoginRegister></LoginRegister>
        </Modal>
    )
}

export default AuhtModal