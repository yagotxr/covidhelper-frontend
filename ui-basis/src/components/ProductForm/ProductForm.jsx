import React, { Component} from 'react'
import '../../assets/scss/Form.scss'
import covid from '../../assets/img/covid.png'
import { FormGroup, Col, Form, Row, Input, Label, Button, Collapse, Navbar, NavbarToggler,
    NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu,
    DropdownItem,NavbarText
} from 'reactstrap'


class ProductForm extends Component {
    
    render() {
        return (
            <div className="Body">
                <Navbar color="dark" light expand="md">
                    <NavbarBrand href="/"><img alt="covid" src={covid} width="40px"/> covidhelper</NavbarBrand>
                    <NavbarToggler />
                    <Collapse navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                        <NavLink href="/">Lojas</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/">Espaço Kids</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/">Notícias</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Options
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            Option 1
                            </DropdownItem>
                            <DropdownItem>
                            Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                            Reset
                            </DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                    </Collapse>
                </Navbar>
                <Form className = "Form">
                    <h4>Cadastro de produtos</h4>
                    <br/>
               <Row form>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="nome">Razão Social</Label>
                            <Input type="text" name="name" id="Nome"/>
                        </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="cnpj">CNPJ</Label>
                            <Input type="text" maxlength="14" name="cnpj" id="cnpj"  />
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={2}>
                        <FormGroup>
                            <Label for="zipCode">CEP</Label>
                            <Input type="text" name="zipCode" id="zipCode"/>
                        </FormGroup>
                        </Col>
                        <Col md={4}>
                        <FormGroup>
                            <Label for="city">Cidade</Label>
                            <Input type="text" name="city" id="city"/>
                        </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="street">Rua</Label>
                            <Input type="text" name="street" id="street"/>
                        </FormGroup>  
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={4}>
                        <FormGroup>
                            <Label for="state">Estado</Label>
                            <Input type="text" name="state" id="state"/>
                        </FormGroup>
                        </Col>
                        <Col md={4}>
                        <FormGroup>
                            <Label for="addOn">Complemento</Label>
                            <Input type="text" name="addOn" id="addOn"/>
                        </FormGroup>
                        </Col>
                        <Col md={2}>
                        <FormGroup>
                            <Label for="addressNumber">Número</Label>
                            <Input type="text" name="addressNumber" id="addressNumber"/>
                        </FormGroup>  
                        </Col>
                        <Col md={2}>
                        <FormGroup>
                            <Label for="phone">Telefone</Label>
                            <Input type="text" maxlength="11" name="phone" id="phone"/>
                        </FormGroup>  
                        </Col>
                    </Row>
                    <Button color="primary">Cadastrar</Button>
                </Form>
            </div>
        )
    }
}
  

export default ProductForm