import React, { Component} from 'react'

import '../../assets/scss/Form.scss'
import {
    Card, CardBody, CardTitle,CardHeader, Label
} from 'reactstrap';
import axios from 'axios';

class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            dados: [],
            longitude: [],
            latitude: [],
            cidade:[]
        }
    }

    componentDidMount() {
        this.getLocal()
    }

    getLocal(){
        navigator.geolocation.getCurrentPosition( location => {
            console.log(location.coords)
            this.setState({'longitude': location.coords.longitude, 'latitude': location.coords.latitude})

            axios.get('https://api.bigdatacloud.net/data/reverse-geocode-client', {params: {latitude: this.state.latitude ,longitude: this.state.longitude , localityLanguage:'ptF'}})
            .then(response => {
                this.setState({'cidade': response.data.city})
                axios.get('http://localhost:8080/api/informations',  {params: {city: this.state.cidade}})
                .then(response => {
                    console.log(response)
                    this.setState({'dados': response.data})
                })
                .catch(error => {
                    console.log(error)
                })
            })
            .catch(error => {
                console.log(error)
            })
        });
    }

    render() {
        const { dados, cidade } = this.state
        return (
            <div >
                <br/>
                <Card color="light" style={{  width: '30rem', height: '15rem'}}>
                    <CardHeader >
                        <CardTitle >
                            Número de casos em {cidade}
                        </CardTitle>
                    </CardHeader>
                    <CardBody>
                            <Label>Região: </Label>{' '}
                            <Label value="regiao">{
                                dados.map(dado => <div>{dado.regiao}</div>)
                            }
                            </Label>
                            <br/>
                            <Label>Município: </Label>{' '}
                            <Label value="municipio">{
                                    dados.map(dado => <div>{dado.municipio}</div>)
                            }</Label>
                            <br/>
                            <Label>Casos confirmados: </Label>{' '}
                            <Label value="casos">{
                                    dados.map(dado => <div>{dado.casosAcumulado}</div>)
                            }</Label>
                            <br/>
                            <Label>Mortes confirmadas: </Label>{' '}
                            <Label value="mortes">{
                                    dados.map(dado => <div>{dado.obitosAcumulado}</div>)
                            }</Label>
                    </CardBody>
                </Card>
            </div>
        )
    }
}


export default Home
