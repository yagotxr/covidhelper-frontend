import React, { Component } from 'react';
import { Table, Modal, Button } from 'react-bootstrap';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants';
import Axios from 'axios';
import deleteIcon from '../../assets/img/delete-icon.png';


class Products extends Component {
    constructor() {
        super();
        this.state = {
            smShow: false,
            lgShow: false,
            products: []
        }
    }

    componentDidMount() {
        const url = `${API_BASE_URL}/account/stores/${this.props.store.id}/products`;
        Axios.get(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
            }
        })
            .then((res) => {
                this.setState({ products: res.data })
            })
            .catch(err => console.log(err));
    }

    setSmShow(value) {
        this.setState({ smShow: true });
    }

    setLgShow(value) {
        this.setState({ lgShow: true });
    }

    render() {
        return (
            <>
                <Button 
                size='sm'
                variant='dark' 
                onClick={() => this.setLgShow(true)}>
                    Detalhes
                </Button>
                <Modal
                    size="lg"
                    show={this.state.lgShow}
                    onHide={() => this.setState({ lgShow: false })}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            <b>{this.props.store.name}</b>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div style={{ padding: '25px' }}>
                            <Button 
                            size='sm' 
                            href={`/produtos?storeId=${this.props.store.id}`}>
                                Adicionar Produtos
                        </Button>
                        </div>
                        {this.state.products.length === 0 ?
                            <div style={{ padding: '25px' }}>
                                <h3>Nenhum produto registrado</h3>
                            </div>

                            :

                            <Table striped bordered hover size="lg">
                                <tbody>
                                    {this.state.products.map(product =>
                                        <tr>
                                            <td>{product.name}</td>
                                            <td>{product.description}</td>
                                            <td>{product.stock}</td>
                                            <td>
                                                <div>
                                                   <Button 
                                                   variant='link' 
                                                   size='sm' block>
                                                       <img src={deleteIcon} width='20px'></img>
                                                    </Button> 
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>}
                    </Modal.Body>
                </Modal>
            </>

        );

    }
}

export default Products;