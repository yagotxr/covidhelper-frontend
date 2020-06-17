import React, { Component } from 'react';
// import { Link, Redirect } from 'react-router-dom'
import { GOOGLE_AUTH_URL } from '../../constants/index'
import { Button, Modal} from 'reactstrap'

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
                    color="primary"
                    type="button"
                    onClick={() => this.setState({ loginModal: true })}
                >
                    Login modal
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
                        <Button className="btn-round" color="primary" href={GOOGLE_AUTH_URL}>
                            Login with Google
                        </Button>
                    </div>
                    <div className="modal-footer no-border-footer">
                        <span className="text-muted text-center">
                            Looking{" "}
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                create an account
                  </a>
                  ?
                </span>
                    </div>
                </Modal>
            </>
        );
    }
}



export default Login        