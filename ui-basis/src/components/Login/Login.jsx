import React, { Component } from 'react';

import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL } from '../../constants/index'
import { Button, Modal } from 'reactstrap'

import google from '../../assets/img/google.png'
import facebook from '../../assets/img/facebook.png'
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
                <Modal
                    isOpen={this.state.loginModal}
                    toggle={() => this.setState({ loginModal: false })}
                    modalClassName="modal-register"
                >
                    <div className="modal-header no-border-header text-center">
                        <h3 className="modal-title text-center">Login</h3>
                        <button
                            aria-label="Close"
                            className="close"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.setState({ loginModal: false })}
                        >
                            <span aria-hidden={true}>×</span>
                        </button>
                        {}
                    </div>

                    {!this.state.userLogged ?
                        <div className="modal-body" style={{ position: 'center' }}>
                            <Button className="btn-round" color="light" href={GOOGLE_AUTH_URL}>
                                Login com Google <img alt="google" src={google} width="40px" />
                            </Button><br /><br />
                            <Button className="btn-round" color="light" href={FACEBOOK_AUTH_URL}>
                                Login com Facebook <img alt="facebook" src={facebook} width="30px" />
                            </Button>
                        </div>
                        :
                        <div style={{
                            padding: '15px 20px'
                        }}>
                            <Button className="btn-round" color="light" href='/lojas'>
                                Cadastrar Loja
                    </Button><br /><br />
                            <Button className="btn-round" color="light" href='/produtos'>
                                Cadastrar Produto
                    </Button><br /><br />
                            <Button className="btn-round" color="light" href='/home'
                            onClick={logout}>
                                Sair
                    </Button>
                        </div>
                    }
                </Modal>
            </div >
        );
    }
}



export default Login        