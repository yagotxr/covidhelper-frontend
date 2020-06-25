import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { } from '../../utils/authentication';
import axios from 'axios';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants';
import { Products } from '../Products';
import Login from '../Login/Login'

class StoreProfile extends Component {
    constructor() {
        super();
        this.state = {
            stores: []
        };
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

    render() {
        return (
            <div style={{ padding: '30px' }}>
                <h1><b>Minhas Lojas</b></h1>
                <br />
                {this.state.stores.length === 0 ?
                    <h3>Não há lojas cadastradas para esta conta.</h3>
                    :
                    <div>
                        {this.state.stores.map(store =>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{store.name}</Card.Title>
                                    <br />
                                    <Products store={store} />
                                </Card.Body>
                            </Card>
                        )}
                    </div>
                }
                <div style={{ marginTop:'30px' }}>
                <Button href='/lojas'>Cadastrar Loja</Button>
                </div>
            </div>
        );
    }
}

export default StoreProfile