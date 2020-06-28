import React, { Component } from 'react'

import covid from '../../assets/img/virus2.png'
import Login from '../../components/Login/Login'
import {
    UncontrolledCollapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container
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
            <Navbar color='dark' expand='lg' style={{ height: '70px' }} >
                <Container>
                    <NavbarBrand href="/home" >
                        <img src={covid} alt='CovidHelper Logo' width='70px' height='70px'></img>
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
                                <NavLink href="/kids">Espaço Kids</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/noticias">Notícias</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/produtoslista">Produtos essenciais</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/faq">FAQ</NavLink>
                            </NavItem>
                            
                        </Nav>
                        <div className="ml-auto"> 
                            <Login/>
                        </div>
                    </UncontrolledCollapse>
                </Container>
            </Navbar >
        );

    }

}

export default NavBar;