<<<<<<< HEAD
import React, { Component } from 'react'
import covid from '../../assets/img/coronavirus.png'
import Login from '../../components/Login/Login'
import {
    UncontrolledCollapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Form,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container
} from 'reactstrap'

class NavBar extends Component {

    constructor() {
        super();
        this.state = {
            bodyClick: false
        }
    }

    render() {

        return (
            <Navbar color='danger' expand='lg' style={{ height: '70px' }} >
                <Container>
                    <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={covid} alt='CovidHelper Logo' width='40px' height='40px'></img>
                            CovidHelper
          </NavbarBrand>
                    <button
                        className="navbar-toggler"
                        id="navbarNavDropdown"
                        type="button"
                        onClick={() => {
                            document.documentElement.classList.toggle("nav-open");
                            this.setState({ bodyClick: true });
                        }}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <UncontrolledCollapse navbar toggler="#navbarNavDropdown">
                        <Nav navbar>
                            <NavItem className="active">
                                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                                    Home <span className="sr-only">(current)</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="kids" onClick={e => e.preventDefault()}>
                                    Espaço Kids
                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                                    Notícias
                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav>
                                <DropdownToggle
                                    aria-haspopup={true}
                                    caret
                                    color="default"
                                    data-toggle="dropdown"
                                    href="#pablo"
                                    id="navbarDropdownMenuLink"
                                    nav
                                    onClick={e => e.preventDefault()}
                                >
                                    Cadastro
                </DropdownToggle>
                                <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                                    <DropdownItem
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        Lojas
                  </DropdownItem>
                                    <DropdownItem
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        Produtos
                  </DropdownItem>
                                    <DropdownItem
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        Médicos
                  </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        <div className="ml-auto"> 
                        <Login/>
                        </div>
                    </UncontrolledCollapse>
                </Container>
                {/* <Navbar.Brand><img alt="covid" src={covid} width="40px" />CovidHelper</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="kids">Espaço Kids</Nav.Link>
                        <Nav.Link href="yago">Yago</Nav.Link>
                        <DropdownMenu title="Cadastro" id="basic-nav-dropdown">
                            <DropdownItem href="lojas">Lojas</DropdownItem>
                            <DropdownItem href="produtos">Produtos</DropdownItem>
                        </DropdownMenu>
                    </Nav>
                    <Form inline>
                        <Login />
                    </Form>
                </Navbar.Collapse> */}
            </Navbar >
        );

    }

}

export default NavBar;
=======
import React, { Component} from 'react'

import { Navbar, NavDropdown, Nav, Form} from 'react-bootstrap'
import Login from '../../components/Login/Login';
import covid from '../../assets/img/covid.png'

class NavBar extends Component {
    render(){
        return(
            <div>
                <Navbar bg="light" >
                <Navbar.Brand><img alt="covid" src={covid} width="40px"/>CovidHelper</Navbar.Brand>
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
>>>>>>> Isolado navbar
