import React, { Component } from 'react'
import covid from '../../assets/img/coronavirus.png'
import Login from '../../components/Login/Login'

import {
    UncontrolledCollapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
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
                    <NavbarBrand href="/">
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
                            <NavItem>
                                <NavLink href="/kids" >
                                    Espaço Kids
                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/noticias">
                                    Notícias
                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav>
                                <DropdownToggle
                                    aria-haspopup={true}
                                    caret
                                    color="default"
                                    data-toggle="dropdown"
                                    id="navbarDropdownMenuLink"
                                    nav
                                >
                                    Cadastro
                </DropdownToggle>
                                <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                                    <DropdownItem
                                        href="lojas"
                                    >
                                        Lojas
                  </DropdownItem>
                                    <DropdownItem
                                        href="produtos"
                                    >
                                        Produtos
                  </DropdownItem>
                                    <DropdownItem
                                        href="medicos"
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