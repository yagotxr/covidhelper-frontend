import React, { Component} from 'react'
import '../../assets/scss/Form.scss'
import { FormGroup, Col, Form, Row, Input, Label, Button
} from 'reactstrap'


class StoreList extends Component {
    
    render() {
        return (
            <div >
                <Form className = "Form">
                    <h4>Cadastro de loja</h4>
                    <br/>
                    <Row form>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="nome">Razão Social</Label>
                            <Input  type="text"/>
                        </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="cnpj">CNPJ</Label>
                            <Input type="text"/>
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={2}>
                        <FormGroup>
                            <Label for="zipCode">CEP</Label>
                            <Input />
                        </FormGroup>
                        </Col>
                        <Col md={4}>
                        <FormGroup>
                            <Label for="city">Cidade</Label>
                            <Input />
                        </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="street">Rua</Label>
                            <Input />
                        </FormGroup>  
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={4}>
                        <FormGroup>
                            <Label for="state">Estado</Label>
                            <Input />
                        </FormGroup>
                        </Col>
                        <Col md={4}>
                        <FormGroup>
                            <Label for="addOn">Complemento</Label>
                            <Input />
                        </FormGroup>
                        </Col>
                        <Col md={2}>
                        <FormGroup>
                            <Label for="addressNumber">Número</Label>
                            <Input />
                        </FormGroup>  
                        </Col>
                        <FormGroup>
                            <Label for="phone">Contatos</Label>
                            <Input />      
                        </FormGroup>  
                        <Button style={{height: '25px', position: 'bottom'}}> + </Button>   
                    </Row>
                    <Button type='submit' color="primary">Cadastrar</Button>
                </Form>
            </div>
        )
    }
}
  

export default StoreList