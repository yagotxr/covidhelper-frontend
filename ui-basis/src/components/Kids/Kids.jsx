import React, { Component} from 'react'
import '../../assets/scss/Form.scss'
import { FormGroup, Col, Form, Row, Input, Label, Button
} from 'reactstrap'


class Kids extends Component {
    
    render() {
        return (
            <div className="Body">
                <Form className = "Form">
                    <h4>Cadastro de produtos</h4>
                    <br/>
               <Row form>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="nome">Produto</Label>
                            <Input type="text" name="name" id="Nome"/>
                        </FormGroup>
                        </Col>
                        <Col md={2}>
                        <FormGroup>
                            <Label for="stock">Estoque</Label>
                            <Input type="number" name="stock" id="stock"/>
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="description">Descrição</Label>
                            <Input type="textarea"  name="description" id="description"  />
                        </FormGroup>
                        </Col>
                    </Row>
                    <Button color="primary">Cadastrar</Button>
                </Form>
            </div>
        )
    }
}
  

export default Kids