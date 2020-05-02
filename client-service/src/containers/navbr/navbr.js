import React, { Fragment } from 'react'
import Login from '../auth/loginModal'
import Register from '../auth/registerModal'
import { Navbar, Nav } from 'react-bootstrap'
import logo from './logo.png'
import Logout from '../auth/logoutButton'
import { useSelector } from "react-redux";

const Navbr = () => {
    const authenticated = useSelector(state => state.user.authenticated)
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
                {!authenticated ?
                    (
                        <Fragment>
                            <Nav><Login></Login></Nav>
                            <Nav><Register></Register></Nav>
                        </Fragment>) : (<Logout></Logout>)}

            </Navbar.Collapse>
        </Navbar >
    )
}

export default Navbr