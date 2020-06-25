import React, { Component } from 'react'
import {
    FormGroup, Col, Form, Row, Input, Label, Button
} from 'reactstrap'
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants'
import StoreProfile from '../StoreProfile/StoreProfile'
import axios from 'axios';

class StoreForm extends Component {
    constructor() {
        super();
        this.state = {
            store: {
                name: "",
                cnpj: "",
                zipCode: "",
                street: "",
                city: "",
                state: "",
                addOn: "",
                addressNumber: "",
                phoneNumbers: []
            },
            inserted: false
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
                store:{
                    [name]: phoneNumbers
                }
            });
        } else {
            this.setState({
                store:{
                    [name]: value
                }
            });
        }
    }

    searchCnpj() {
        let cnpj = this.state.store.cnpj;
        cnpj = cnpj.replace(/[./-]/g, '')
        axios.get(`https://api.cnpja.com.br/companies/${cnpj}`, {
            headers: {
                "authorization": "a2439a81-13a4-43a4-b417-f775b3b2f314-d2228977-0880-4227-bb3b-4378c138809c"
            }
        })
            .then((res) => {
                const data = res.data;
                this.setState({
                    store: {
                        name: data.name,
                        cnpj: data.tax_id,
                        zipCode: data.address.zip,
                        street: data.address.street,
                        city: data.address.city,
                        state: data.address.state,
                        addOn: data.address.details,
                        addressNumber: data.address.number,
                        phoneNumbers: [data.phone, data.phone_alt]
                    },
                });
            })
            .catch((err) => {
                if(err.response.status === 400){
                    window.alert('Verifique o CNPJ digitado. Não foi possível efetuar busca.')
                } 
                else if(err.response.status === 404){
                    window.alert('Empresa não encontrada com o CNPJ inserido.');
                }
            });
    }



    handleSubmit(e) {
        const body = this.state.store;
        axios.post(`${API_BASE_URL}/account/stores`, body, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
            }
        })
            .then((res) => {
                this.setState({inserted: true});
            })
            .catch(err => window.alert(err.message));
    }

    render() {
        const store = this.state.store;
        return (
            <div >
                {!this.state.inserted ? 
                <Form onSubmit={(e) => {
                    e.preventDefault();
                    this.handleSubmit()
                }} className="Form">
                    <h4>Cadastro de loja</h4>
                    <br />
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="nome">Razão Social</Label>
                                <Input
                                    disabled
                                    type="text"
                                    value={store.name}
                                    name="name" id="name" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <div>
                                    <Label for="cnpj">CNPJ</Label>
                                    <Input type="text" maxLength="20" name="cnpj" id="cnpj"
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
                                    value={store.zipCode} />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="city">Cidade</Label>
                                <Input disabled type="text" name="city" id="city"
                                    value={store.city} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="street">Rua</Label>
                                <Input disabled type="text" name="street" id="street"
                                    value={store.street} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="state">Estado</Label>
                                <Input disabled type="text" name="state" id="state"
                                    value={store.state} />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="addOn">Complemento</Label>
                                <Input disabled type="text" name="addOn" id="addOn"
                                    value={store.addOn} />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="addressNumber">Número</Label>
                                <Input disabled type="text" name="addressNumber" id="addressNumber"
                                    value={store.addressNumber} />
                            </FormGroup>
                        </Col>
                        <FormGroup>
                            <Label for="phone">Contatos</Label>
                            <Input disabled type="text" maxLength="50" name="phoneNumbers" id="phone"
                                value={store.phoneNumbers} />
                        </FormGroup>
                    </Row>
                    <Button type='submit' color="primary">Cadastrar</Button>
                </Form>
                :
                <StoreProfile />
}
            </div>
    
        )
    }
}


export default StoreForm