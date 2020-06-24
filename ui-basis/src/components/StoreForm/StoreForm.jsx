import React, { Component } from 'react'
import {
    FormGroup, Col, Form, Row, Input, Label, Button
} from 'reactstrap'
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants'
import axios from 'axios';

class StoreForm extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            cnpj: "",
            zipCode: "",
            street: "",
            city: "",
            state: "",
            addOn: "",
            addressNumber: "",
            phoneNumbers: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.searchCnpj = this.searchCnpj.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target
        if (name === 'phoneNumbers') {
            var phoneNumbers = [];
            phoneNumbers.push(value);
            this.setState({
                [name]: phoneNumbers
            });
        } else {
            this.setState({
                [name]: value
            });
        }
    }

    searchCnpj() {
        axios.get(`https://api.cnpja.com.br/companies/${this.state.cnpj}`, {
            headers: {
                "authorization": "a2439a81-13a4-43a4-b417-f775b3b2f314-d2228977-0880-4227-bb3b-4378c138809c"
            }
        })
            .then((res) => {
                const data = res.data;
                this.setState({
                    name: data.name,
                    cnpj: data.tax_id,
                    zipCode: data.address.zip,
                    street: data.address.street,
                    city: data.address.city,
                    state: data.address.state,
                    addOn: data.address.details,
                    addressNumber: data.address.number,
                    phoneNumbers: [data.phone, data.phone_alt]
                });
            })
            .catch(err => console.log(err));
    }



    handleSubmit(e) {

    }

    render() {
        return (
            <div >
                <Form onSubmit={this.handleSubmit} className="Form">
                    <h4>Cadastro de loja</h4>
                    <br />
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="nome">Razão Social</Label>
                                <Input type="text"
                                    value={this.state.name}
                                    name="name" id="name" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <div>
                                    <Label for="cnpj">CNPJ</Label>
                                    <Input type="text" maxlength="14" name="cnpj" id="cnpj"
                                        value={this.state.cnpj}
                                        onChange={this.handleChange} />
                                    <Button id='btn-buscar' onClick={this.searchCnpj}>Buscar</Button>
                                </div>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="zipCode">CEP</Label>
                                <Input disabled type="text" name="zipCode" id="zipCode"
                                    value={this.state.zipcode} />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="city">Cidade</Label>
                                <Input disabled type="text" name="city" id="city"
                                    value={this.state.city} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="street">Rua</Label>
                                <Input disabled type="text" name="street" id="street"
                                    value={this.state.street} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="state">Estado</Label>
                                <Input disabled type="text" name="state" id="state"
                                    value={this.state.state} />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="addOn">Complemento</Label>
                                <Input disabled type="text" name="addOn" id="addOn"
                                    value={this.state.addOn} />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="addressNumber">Número</Label>
                                <Input disabled type="text" name="addressNumber" id="addressNumber"
                                    value={this.state.addressNumber} />
                            </FormGroup>
                        </Col>
                        <FormGroup>
                            <Label for="phone">Contatos</Label>
                            <Input disabled type="text" maxlength="11" name="phoneNumbers" id="phone"
                                value={this.state.phoneNumbers} readonly />
                        </FormGroup>
                    </Row>
                    <Button type='submit' color="primary">Cadastrar</Button>
                </Form>
            </div>
        )
    }
}


export default StoreForm