import React, { Component} from 'react'
import { FormGroup, Col, Form, Row, Input, Label, Button
} from 'reactstrap'
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants'
import axios from 'axios';

class StoreForm extends Component {
    constructor(){
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
    }

    handleChange(e){
        const {name, value} = e.target
        if(name === 'phoneNumbers'){
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



    handleSubmit(e){
        e.preventDefault();
        axios.post(`${API_BASE_URL}/account/stores`, this.state , {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)}
        }).then((res) => 
        {console.log(res.status)})
    }

    render() {
        return (
            <div >
                <Form onSubmit={this.handleSubmit} className = "Form">
                    <h4>Cadastro de loja</h4>
                    <br/>
                    <Row form>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="nome">Razão Social</Label>
                            <Input  type="text"                            
                            value={this.state.name} 
                            name="name" id="name" 
                            onChange={this.handleChange} />
                        </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="cnpj">CNPJ</Label>
                            <Input type="text" maxlength="14" name="cnpj" id="cnpj" 
                            value={this.state.cnpj} 
                            onChange={this.handleChange} />
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={2}>
                        <FormGroup>
                            <Label for="zipCode">CEP</Label>
                            <Input type="text" name="zipCode" id="zipCode"
                            value={this.state.zipcode} 
                            onChange={this.handleChange}/>
                        </FormGroup>
                        </Col>
                        <Col md={4}>
                        <FormGroup>
                            <Label for="city">Cidade</Label>
                            <Input type="text" name="city" id="city"
                            value={this.state.city} 
                            onChange={this.handleChange}/>
                        </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="street">Rua</Label>
                            <Input type="text" name="street" id="street"
                            value={this.state.street} 
                            onChange={this.handleChange}/>
                        </FormGroup>  
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={4}>
                        <FormGroup>
                            <Label for="state">Estado</Label>
                            <Input type="text" name="state" id="state"
                            value={this.state.state} 
                            onChange={this.handleChange}/>
                        </FormGroup>
                        </Col>
                        <Col md={4}>
                        <FormGroup>
                            <Label for="addOn">Complemento</Label>
                            <Input type="text" name="addOn" id="addOn"
                            value={this.state.addOn} 
                            onChange={this.handleChange}/>
                        </FormGroup>
                        </Col>
                        <Col md={2}>
                        <FormGroup>
                            <Label for="addressNumber">Número</Label>
                            <Input type="text" name="addressNumber" id="addressNumber"
                            value={this.state.addressNumber} 
                            onChange={this.handleChange}/>
                        </FormGroup>  
                        </Col>
                        <FormGroup>
                            <Label for="phone">Contatos</Label>
                            <Input type="text" maxlength="11" name="phoneNumbers" id="phone"
                            value={this.state.phoneNumbers} 
                            onChange={this.handleChange}/>      
                        </FormGroup>  
                        <Button style={{height: '25px', position: 'bottom'}}> + </Button>   
                    </Row>
                    <Button type='submit' color="primary">Cadastrar</Button>
                </Form>
            </div>
        )
    }
}
  

export default StoreForm