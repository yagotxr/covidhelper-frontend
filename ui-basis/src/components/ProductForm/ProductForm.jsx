import React, { Component } from 'react'
import '../../assets/scss/Form.scss'
import {
    FormGroup, Col, Form, Row, Button, Card, Badge
} from 'react-bootstrap';
import { Input, Label } from 'reactstrap';
import axios from 'axios';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants';

class ProductForm extends Component {
    constructor() {
        super();
        this.state = {
            inserted: false,
            storeId: '',
            name: '',
            description: '',
            stock: 400
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let url = this.props.location.search;
        let params = new URLSearchParams(url);
        this.setState({ storeId: params.get('storeId') });
        console.log(url);
        console.log(params);
    }

    handleSubmit() {
        const body = {
            name: this.state.name,
            description: this.state.description,
            stock: this.state.stock
        }
        let req = `${API_BASE_URL}/account/stores/${this.state.storeId}/products`
        axios.post(req, body, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
            }
        })
            .then((res) => {
                this.setState({ inserted: true })
            })
            .catch((err) => {
                window.alert('Não foi possível registrar o produto. Tente novamente. ' + err.message)
            })
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="Body">
                {this.state.inserted ?
                    <div style={{ padding: '60px', marginLeft: '200px', marginRight:'200px' }}>
                        <Card>
                            <Card.Header>Produto Inserido</Card.Header>
                            <Card.Body>
                                <div style={{padding:'10px'}}>
                                <h2><b>{this.state.name}</b></h2>
                                <p>{this.state.description}</p>
                                <Badge variant="light">Estoque: {this.state.stock}</Badge>
                                </div>
                                <div>
                                    <Col m={3}>
                                    <Button href='/minhasLojas'>Voltar</Button>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    :
                    <Form className="Form" onSubmit={(e) => { e.preventDefault(); this.handleSubmit() }}>
                        <h4>Cadastro de produtos</h4>
                        <br />
                        <Row form>
                            <Col md={10}>
                                <FormGroup>
                                    <Label for="nome">Produto</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="Nome"
                                        value={this.state.name}
                                        onChange={this.handleChange} />
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label for="stock">Estoque</Label>
                                    <Input
                                        type="number"
                                        name="stock"
                                        id="stock"
                                        value={this.state.stock}
                                        onChange={this.handleChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="description">Descrição</Label>
                                    <Input
                                        type="textarea"
                                        name="description"
                                        id="description"
                                        value={this.state.description}
                                        onChange={this.handleChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button type='submit' className="btn-round" color="primary">Cadastrar</Button>
                    </Form>
                }
            </div>
        )
    }
}


export default ProductForm