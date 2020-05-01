import React from 'react'
import Button from '../auth/authModal'
import { Navbar, Nav } from 'react-bootstrap'
import logo from './logo.png'

const navbr = () => {
    return (
        <Navbar expand="lg" >
            <Navbar.Brand href="/">
                <img
                    src={logo}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    alt="logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <Nav><Button></Button></Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default navbr