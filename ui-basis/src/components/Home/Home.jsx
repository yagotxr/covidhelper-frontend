import React, { Component} from 'react'

import '../../assets/scss/Form.scss'
import { 
    Card, CardBody, CardTitle, Input, CardHeader, 
    InputGroup, InputGroupAddon, Label, InputGroupText, Button
} from 'reactstrap';
import axios from 'axios';


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
                <Card color="light" style={{  width: '30rem', height: '20rem'}}>
                    <CardHeader >
                        <CardTitle >
                            NÚMERO DE CASOS POR ESTADO 
                        </CardTitle>
                    </CardHeader>
                    <CardBody>
                            <br/>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText>Estado</InputGroupText>
                                </InputGroupAddon>
                                    <Input type="select" md={2} select id="UF" name="UF">
                                        <option value="">Selecione</option>
                                        <option value="AC">AC</option>
                                        <option value="AL">AL</option>
                                        <option value="AP">AP</option>
                                        <option value="AM">AM</option>
                                        <option value="BA">BA</option>
                                        <option value="CE">CE</option>
                                        <option value="DF">DF</option>
                                        <option value="ES">ES</option>
                                        <option value="GO">GO</option>
                                        <option value="MA">MA</option>
                                        <option value="MS">MS</option>
                                        <option value="MT">MT</option>
                                        <option value="MG">MG</option>
                                        <option value="PA">PA</option>
                                        <option value="PB">PB</option>
                                        <option value="PR">PR</option>
                                        <option value="PE">PE</option>
                                        <option value="PI">PI</option>
                                        <option value="RJ">RJ</option>
                                        <option value="RN">RN</option>
                                        <option value="RS">RS</option>
                                        <option value="RO">RO</option>
                                        <option value="RR">RR</option>
                                        <option value="SC">SC</option>
                                        <option value="SP">SP</option>
                                        <option value="SE">SE</option>
                                        <option value="TO">TO</option>
                                    </Input>{' '}
                                    <Button type="submit">Buscar</Button>
                            </InputGroup>
                            <br/>
                            <Label>Região: </Label>{' '}
                            <Label value="regiao">
                                {
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