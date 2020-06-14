import React, {Component} from 'react';
import {BrowserRouter as Router } from 'react-router-dom';

import Routes from '../Routes/Routes';
import Menu from '../Menu/Menu';
import covid from '../../assets/img/covid.png'

import { Navbar, NavDropdown, Nav } from 'react-bootstrap'

class App extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" >
                    <Navbar.Brand><img alt="covid" src={covid} width="40px"/>CovidHelper</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                <Router>
                    <div>
                        <Menu/>
                        <Routes/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;