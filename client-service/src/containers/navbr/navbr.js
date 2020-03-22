import React from 'react'
import { Button } from '@material-ui/core'
import { Navbar, Nav } from 'react-bootstrap'
const navbr = () => {
    return (
        <Navbar expand="lg" >
            <Navbar.Brand href="/">Romo Club</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <Nav><Button color='primary' variant='contained'>Login/Register</Button></Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default navbr