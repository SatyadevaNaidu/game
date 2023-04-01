import React from 'react';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import logo from '../assests/dice_logo.png'

const Navigation = (props) => {
    console.log(props);
    return (
        <Navbar className='color-nav' variant="light">
            <Navbar.Brand href="/">
            <img className='App-logo' style={{ width: 30, height: 30 }}src={logo} alt="The GAME" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Instructions">Instructions</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link>
                    <Nav.Link href="/Contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Navigation);