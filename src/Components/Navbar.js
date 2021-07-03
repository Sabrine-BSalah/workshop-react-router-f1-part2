import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand >React router</Navbar.Brand>
            <Nav className="mr-auto">
                <NavLink exact to="/" className="navLink" activeClassName="selectedLink">Home</NavLink>
                <NavLink to="/products" className="navLink" activeClassName="selectedLink">Products</NavLink>
                <NavLink to="/about" className="navLink" activeClassName="selectedLink">About</NavLink>
            </Nav>
        </Navbar>
    )
}

export default NavBar
