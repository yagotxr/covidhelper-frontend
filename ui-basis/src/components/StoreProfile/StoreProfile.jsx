import React, { Component } from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { } from '../../utils/authentication';
import axios from 'axios';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants';
import { Products } from '../Products';
import Login from '../Login/Login'
import deleteIcon from '../../assets/img/delete-icon.png';

class StoreProfile extends Component {
    constructor() {
        super();
        this.state = {
            stores: []
        };
        // this.deleteStore = this.deleteStore.bind(this);
    }

    componentDidMount() {
        console.log("oie");
        axios.get(`${API_BASE_URL}/account/users/stores`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
            }
        })
            .then((res) => {
                this.setState({ stores: res.data })
            })
            .catch((err) => console.log(err));
    }

    deleteStore(store) {
        axios.delete(`${API_BASE_URL}/account/stores/${store.id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
            }
        })
            .then((res) => {
                const storeArr = this.state.stores;
                const removeIndex = this.state.stores.map(function (item) { return item.id; }).indexOf(store.id);
                storeArr.splice(removeIndex, 1);
                this.setState({ stores: storeArr });
                console.log(this.state);
            })
            .catch((err) => {
                window.alert(err.response.message);
            });
    }

    render() {
        return (
            <div style={{ padding: '30px' }}>
                <h1><b>Minhas Lojas</b></h1>
                <br />
                {this.state.stores.length === 0 ?
                    <h3>Não há lojas cadastradas para esta conta.</h3>
                    :
                    <div>
                        <Row>
                            {this.state.stores.map(store =>
                                <div>
                                    <Card style={{ width: '20rem', height: '16rem' }}>
                                        <Card.Body>
                                            <Card.Title>{store.name}</Card.Title>
                                            <br />
                                            
                                        </Card.Body>
                                        <Card.Footer>
                                            <Row>
                                                <Col md={4}>
                                                    <Products store={store} />
                                                </Col>
                                                <Col md={{ span: 3, offset: 4 }}>
                                                    <Button
                                                        size='sm'
                                                        variant='danger'
                                                        onClick={() => {
                                                            console.log(store);
                                                            this.deleteStore(store);
                                                        }}>
                                                            Deletar
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                </div>
                            )}
                        </Row>

                    </div>

                }
                <div style={{ marginTop: '30px' }}>
                    <Button href='/lojas'>Cadastrar Loja</Button>
                </div>
            </div>
        );
    }
}

export default StoreProfile