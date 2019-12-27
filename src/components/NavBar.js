import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import About from './About'

class NavBar extends React.Component {

    render() {
        return (
            <Navbar bg="light" expand="lg" >
                <Navbar.Brand href="/">Urban Grind</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/signup">Signup</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Nav.Link href="/discover">Discover</Nav.Link>
                        {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button> */}
                    </Form>
                </Navbar.Collapse>
            </Navbar >
        )
    }
}

export default NavBar
