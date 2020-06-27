import React, { Component } from 'react';

import { GOOGLE_AUTH_URL } from '../../constants/index';
import { Button } from 'reactstrap';
import { Modal, Row } from 'react-bootstrap';
import google from '../../assets/img/google.png';
import { isAccessTokenAvailable, logout } from '../../utils/authentication';
class Login extends Component {

    constructor() {

        super();
        this.state = {
            loginModal: false,
            userLogged: isAccessTokenAvailable()
        }
    }

    render() {
        return (
            <div>
                <Button
                    className="btn-round"
                    color="dark"
                    type="button"
                    onClick={
                        () => {
                            console.log(this.state);
                            this.setState({ loginModal: true, userLogged: isAccessTokenAvailable() })
                        }
                    }
                >
                    Conta
            </Button>
                <div>
                    <Modal
                        size='sm'
                        style={{ marginLeft: '400px' }}
                        show={this.state.loginModal}
                        onHide={() => this.setState({ loginModal: false })}>
                        <Modal.Body style={{ padding: '20px' }}>
                            {!this.state.userLogged ?
                                <div style={{ paddingTop: '20px' }}>
                                    <Button color="light" href={GOOGLE_AUTH_URL} block>
                                        <img alt="google" src={google} width="30px" />  Login com Google
                                </Button><br /><br />
                                </div>

                                :

                                <div style={{padding:'20px'}}>
                                    <Row>
                                        <Button className="btn-round" color="light" href='/lojas' block>
                                            Cadastrar Loja
                                </Button>
                                    </Row>
                                    <Row>
                                        <Button className="btn-round" color="light" href='/minhasLojas' block>
                                            Minhas Lojas
                                    </Button>
                                    </Row>
                                    <Row>
                                        <Button className="btn-round" color="light" href='/home'
                                            onClick={logout}
                                            block>
                                            Sair
                                        </Button>
                                    </Row>

                                </div>
                            }
                        </Modal.Body>
                    </Modal>
                </div>

            </div >
        );
    }
}



export default Login        