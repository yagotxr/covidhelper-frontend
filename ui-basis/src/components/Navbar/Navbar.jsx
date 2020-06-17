
import React, { Component} from 'react'

import { Navbar, NavDropdown, Nav, Form} from 'react-bootstrap'
import Login from '../../components/Login/Login';
import covid from '../../assets/img/covid.png'

class NavBar extends Component {
    render(){
        return(
            <div>
                <Navbar bg="light" >
                <Navbar.Brand href="home"><img alt="covid" src={covid} width="40px"/>CovidHelper</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="kids">Espaço Kids</Nav.Link>
                    <Nav.Link href="noticias">Noticias</Nav.Link>
                    <NavDropdown title="Cadastro" id="basic-nav-dropdown">
                        <NavDropdown.Item href="lojas">Lojas</NavDropdown.Item>
                        <NavDropdown.Item href="produtos">Produtos</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form inline>
                        <Login/>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
        )
    }
}
  


export default NavBar
