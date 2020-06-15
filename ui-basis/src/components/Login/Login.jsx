import React, { Component} from 'react'

import '../../assets/scss/Form.scss'
import facebook from '../../assets/img/facebook.png'
import google from '../../assets/img/google.png'


class Login extends Component {
    
    render() {
        return (
            <div className="Body">
                <br/>
                <br/>
                <label>Realizar login com:</label>
                <br/>
                <a href="http:localhost:8080/api/oauth2/authorize/facebook?redirect_uri=http://localhost:3000/oauth2/redirect"><img alt="facebook" src={facebook} width="40px"/></a>
                <a href="http:localhost:8080/api/oauth2/authorize/google?redirect_uri=http://localhost:3000/oauth2/redirect"><img alt="google" src={google} width="60px"/></a>
                    
            </div>
        )
    }
}
  

export default Login