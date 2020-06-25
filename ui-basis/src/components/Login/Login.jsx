import React, { Component } from 'react';

import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL } from '../../constants/index';
import { Button } from 'reactstrap';
import { Modal, Col } from 'react-bootstrap';
import google from '../../assets/img/google.png';
import facebook from '../../assets/img/facebook.png';
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
                style={{marginLeft: '400px'}} 
                show={this.state.loginModal} 
                onHide={() => this.setState({ loginModal: false })}>
                    <Modal.Body>
                        {!this.state.userLogged ?
                            <div style={{padding: "10px"}}>
                                <Button className="btn-round" color="light" href={GOOGLE_AUTH_URL}>
                                  <img alt="google" src={google} width="40px" />  Login com Google 
                                </Button><br /><br />
                            </div>

                            :

                            <div>
                                <Col md={10}>
                                <Button className="btn-round" color="light" href='/lojas'>
                                    Cadastrar Loja
                                </Button>
                                </Col>
                                <Col>
                                <Button className="btn-round" color="light" href='/minhasLojas'>
                                    Minhas Lojas
                                </Button>
                                </Col>
                                <Col>
                                <Button className="btn-round" color="light" href='/home'
                                    onClick={logout}>
                                    Sair
                                </Button>
                                </Col>
                                
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