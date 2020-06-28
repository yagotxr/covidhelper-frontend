import React, { Component } from 'react'
import covid from '../../assets/img/coronavirus.png'
import Login from '../../components/Login/Login'
import { Navbar, Nav } from 'react-bootstrap'


class NavBar extends Component {

    constructor() {
        super();
        this.state = {
            bodyClick: false
        }
    }

    render() {

        return (
            <Navbar bg="light" expand="lg" style={{ padding: '20px 100px 20px 100px' }}>
                <Navbar.Brand href="/home">
                    <img
                        src={covid}
                        width="60"
                        height="60"
                        className="d-inline-block"
                        alt="Covid Helper"
                    />{' '}
                </Navbar.Brand>
                <Navbar.Brand href="/home" style={{paddingBottom: '9px'}}>
                    Covid Helper
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/kids">Espaço Kids</Nav.Link>
                        <Nav.Link href="/noticias">Notícias</Nav.Link>
                        <Nav.Link href="/produtoslista">Produtos essenciais</Nav.Link>
                        <Nav.Link href="/faq">FAQ</Nav.Link>
                    </Nav>
                    <Login />
                </Navbar.Collapse>
            </Navbar>
        );

    }

}

export default NavBar;