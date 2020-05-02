import React from 'react'
import { Button } from '@material-ui/core'
import logic from './logic'


const AuhtModal = () => {
    const { handleLogout } = logic()

    return (
        <Button color='secondary' variant='text' onClick={handleLogout} >
            Logout
        </Button >
    )
}

export default AuhtModal