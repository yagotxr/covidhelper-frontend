import React, {Component} from 'react';
import {BrowserRouter as Router } from 'react-router-dom';

import Routes from '../Routes/Routes';
import Menu from '../Menu/Menu';
import covid from '../../assets/img/covid.png'

import { Navbar, NavDropdown, Nav, Form} from 'react-bootstrap'

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
                        <Nav.Link href="kids">Espaço Kids</Nav.Link>
                        <NavDropdown title="Cadastro" id="basic-nav-dropdown">
                            <NavDropdown.Item href="lojas">Lojas</NavDropdown.Item>
                            <NavDropdown.Item href="produtos">Produtos</NavDropdown.Item>
                            <NavDropdown.Item href="yago">Yago</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Form inline>
                            <Nav.Link href="login">Login</Nav.Link>
                        </Form>
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