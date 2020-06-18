import React, { Component } from 'react'
import axios from 'axios'
import {
} from 'react-bootstrap'



class Home extends Component {

    constructor() {
        super();
        this.state = {
            regiao: "",
            estado: "",
            municipio: "",
            data: "",
            casosAcumulado: "",
            obitosAcumulado: ""
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/informations?city=Contagem')
            .then(res => {
                this.setState(res.data);
                console.log('state: ', this.state)
            });
    }


    render() {
        return (
            <div >
                {this.state.region.map(state => <h1>Regiao: {state.regiao}</h1>)}
            </div>
        )
    }
}


export default Home