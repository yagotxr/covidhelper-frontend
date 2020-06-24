import React, { Component} from 'react'

import '../../assets/scss/Form.scss'
import { 
    Card, CardBody, CardTitle,CardHeader, Label
} from 'reactstrap';
import axios from 'axios';
import Map from '../Map/Map';


class Home extends Component {

    constructor(props){
        super(props)

        this.state = {
            dados: []
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:8080/api/informations?state=DF')
          .then(response => {
            console.log(response)
            this.setState({'dados': response.data})
          })
          .catch(error => {
              console.log(error)
          })
    }

    render() {
        const { dados } = this.state
        return (
            <div>
                <Card color="light" style={{  width: '30rem', height: '17rem'}}>
                    <CardHeader >
                        <CardTitle >
                            NÚMERO DE CASOS POR ESTADO 
                        </CardTitle>
                    </CardHeader>
                    <CardBody>
                            <Label>Região: </Label>{' '}
                            <Label value="regiao">
                                {
                                    dados.map(dado => <div>{dado.regiao}</div>)
                                }
                            </Label>
                            <br/>
                            <Label>Cidade: </Label>{' '}
                            <Label value="cidade">
                                {
                                    dados.map(dado => <div>{dado.cidade}</div>)
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
                <Map></Map>
            </div>
        )
    }
}
  

export default Home