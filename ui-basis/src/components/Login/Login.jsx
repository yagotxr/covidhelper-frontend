import React, { Component } from 'react';

import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL } from '../../constants/index'
import { Button, Modal} from 'reactstrap'

import google from '../../assets/img/google.png'
import facebook from '../../assets/img/facebook.png'

class Login extends Component {

    constructor() {
        super();
        this.state = {
            loginModal: false,
        }
    }

    render() {
        return (
            <>
                <Button
                    className="btn-round"
                    color="dark"
                    type="button"
                    onClick={() => this.setState({ loginModal: true })}
                >
                    Login
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
                    </div>
                    <div className="modal-body">
                        <Button className="btn-round" color="light" href={GOOGLE_AUTH_URL}>
                            Login com Google <img alt="google" src={google} width="40px"/>
                        </Button><br/><br/>
                        <Button className="btn-round" color="light" href={FACEBOOK_AUTH_URL}>
                            Login com Facebook <img alt="facebook" src={facebook} width="30px"/>
                        </Button>
                    </div>
                    <div className="modal-footer no-border-footer">
                        <span className="text-muted text-center">
                            Não tem cadastro?{" "}
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                Criar uma conta
                  </a>
                </span>
                    </div>
                </Modal>
            </>
        );
    }
}



export default Login        