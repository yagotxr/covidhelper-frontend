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
            localizacao: []
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
        
          this.getLocal()
    }

    getLocal(){
        navigator.geolocation.getCurrentPosition( location => {
            console.log(location);
        });
    }
    

    render() {
        const { dados } = this.state
        return (
            <div url={this.state.localizacao}>
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
            </div>
        )
    }
}
  

export default Home