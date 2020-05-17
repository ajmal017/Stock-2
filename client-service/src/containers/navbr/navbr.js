import React, { Fragment } from 'react'
import Login from '../auth/authModal'
import Register from '../auth/registerModal'
import { Navbar, Nav } from 'react-bootstrap'
import logo from './logo.png'
import Logout from '../auth/logoutButton'
import { useSelector } from "react-redux";
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

const Navbr = () => {
    const authenticated = useSelector(state => state.user.authenticated)
    return (
        <Navbar expand="lg" >
            <Navbar.Brand as={Link} to='/'>
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
                    <Nav.Link as={Link} to='/'>Stocks</Nav.Link>
                    <Nav.Link as={Link} to='/portfolio' >Portfolio</Nav.Link>
                    <Nav.Link as={Link} to='/options' >Options</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    {!authenticated ? (<Login></Login>) : (<Logout></Logout>)}
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Navbr