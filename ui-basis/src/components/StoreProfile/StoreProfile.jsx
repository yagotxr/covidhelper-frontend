import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
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
            <div class='wrapper'>
                <h1>Minhas Lojas</h1>
                <br/>
                {console.log(this.state)}
                {this.state.stores.map(store =>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                        <Card.Title>{store.name}</Card.Title>
                        <br/>
                        <Products store={store} />
                        </Card.Body>
                    </Card>
                )}
            </div>
        );
    }
}

export default StoreProfile