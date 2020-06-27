import React, { Component} from 'react'
import '../../assets/scss/Form.scss'
import { FormGroup, Col, Form, Row, Input, Label, Button
} from 'reactstrap'


class ProductList extends Component {
    
    render() {
        return (
            <div className="Body">
                <Form className = "Form">
                    <h4>Produtos Disponíveis</h4>
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
                   
                    <Button className="btn-round" color="primary">Buscar</Button>
                </Form>
            </div>
        )
    }
}
  

export default ProductList