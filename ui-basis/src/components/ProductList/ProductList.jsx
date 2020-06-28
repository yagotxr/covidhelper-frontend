import React, { Component } from 'react'
import '../../assets/scss/Form.scss'
import { Card, CardDeck, CardHeader, Label, CardBody
} from 'reactstrap';
import axios from 'axios';


class ProductList extends Component {
    constructor(props){
        super(props)

        this.state = {
            dados: [],
            longitude: [],
            latitude: [],
            cidade: [],
            loja: [],
            id: [],
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
                axios.get('http://localhost:8080/api/products',  {params: {city: this.state.cidade}})
                .then(resposta => {
                    console.log(resposta)
                    this.setState({'dados': resposta.data})
                    this.setState({'id': Object.keys(resposta.data)})
                    
                    for(let i=0; i<this.state.id.length; i++){
                        let req = `http://localhost:8080/api/stores/${this.state.id[i]}`
                        axios.get(req)
                        .then(response => {
                            this.setState({
                                loja : this.state.loja.concat(response.data)
                              })
                            console.log(this.state.loja)
                        })
                        .catch(error => {
                            console.log(error)
                        })
                    }
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
        const { dados, cidade, loja} = this.state

        return (
            <div className="Body">            
                <header>
                    <br/>
                    <h4>Produtos essenciais em {cidade}</h4>
                    <hr />
                </header>
                <CardDeck>{
                    Object.keys(dados).map((key, index) => ( 
                    <Card border="primary" style={{ width: '18rem' }}key={index}> 
                        {dados[key].map(dado => 
                        <CardHeader><b>{dado.name}</b></CardHeader>
                        )}
                        <CardBody>
                            {dados[key].map(dado => 
                            <Label><b>Descrição:</b> {dado.description}</Label>
                            )}<br/>
                            {dados[key].map(dado => 
                            <Label><b>Estoque disponível:</b> {dado.stock}</Label>
                            )}
                            <br/>
                            {loja.map(l => 
                            <Label><b>Loja:</b> {l.name}</Label>
                            )}<br/>
                            
                        </CardBody>
                    </Card> 
                    ))
                }</CardDeck>
                                                   
            </div>
        )
    }
}


export default ProductList