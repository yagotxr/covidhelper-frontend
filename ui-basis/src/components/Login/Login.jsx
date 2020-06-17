import React, { Component } from 'react';
// import { Link, Redirect } from 'react-router-dom'
import { GOOGLE_AUTH_URL } from '../../constants/index'
import googleLogo from '../../assets/img/google.png'
import { Card, Button, Modal, Input, FormGroup } from 'reactstrap'

class Login extends Component {

    constructor() {
        super();
        this.state = {
            loginModal: false,
        }
        this.googleLogoSize = '25px';
    }

    render() {
        return (
            <>
                <Button
                    className="btn-round"
                    color="primary"
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
                        <button
                            aria-label="Close"
                            className="close"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.setState({ loginModal: false })}
                        >
                            <span aria-hidden={true}>×</span>
                        </button>
                        <h6 className="text-muted">Welcome</h6>
                        <h3 className="modal-title text-center">Paper Kit</h3>
                        <p>Log in to your account</p>
                    </div>
                    <div className="modal-body">
                    
                        <a href={GOOGLE_AUTH_URL}>
                            <Card>
                            <i><img src={googleLogo} 
                            alt='Google Logo' 
                            height={this.googleLogoSize}
                            width={this.googleLogoSize}></img></i>
                            Login with Google
                        </Card> 
                        </a>
                    </div>
                </Modal>
            </>
        );
    }
}


{/* class SocialLogin extends Component {
    render() {
        return (
            <div className="social-login">
                <Card>
                   <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}></a> 
                </Card> 
                
            </div>
        );
    }
} */}



export default Login        