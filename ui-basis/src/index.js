import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormGroup, Label, Input, Button} from "reactstrap";
import "./assets/css/bootstrap.min.css";
import "./assets/css/paper-kit.css";
import axios from 'axios';

class InputC extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: null ,
            cnpj: null ,
            cpf: null,
            zipCode: null,
            addOn: null,
            phone: null,
            street: null,
            city: null,
            state: null,
            neighborhood: null,
            addreddNumber: null,
            clickedCNPJ: false,
            clickedCPF: false
        };
        this.CNPJHandler = this.CNPJHandler.bind(this);
        this.CPFHandler = this.CPFHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.onChange = (evento) => {
            const  state = Object.assign({}, this.state);
            const campo = evento.target.name;
            state[campo] = evento.target.value;
            this.setState(state);
        };

        const urlPost = "localhost:8080/api/stores";

        this.onSubmit = (evento) => {
            var cadastro = {"name" : this.state.name,
                "cnpj": this.state.cnpj,
                "zipCode" : this.state.zipCode,
                "street": this.state.street,
                "city": this.state.city,
                "state": this.state.state,
                "neighborhood": this.state.neighborhood,
                "addOn" : this.state.addOn,
                "addreddNumber": this.state.addreddNumber,
                "phone": this.state.phone };

            const response = axios.post(urlPost,{cadastro});
            console.log(response.data)
        }
    }

    CNPJHandler() {
        this.setState({
          clickedCNPJ: !this.state.clickedCNPJ
        });
      }

    CPFHandler() {
        this.setState({
          clickedCPF: !this.state.clickedCPF
        });
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }


    render(){
            const radioCPF = this.state.clickedCPF ;
            const radioCNPJ = this.state.clickedCNPJ ;
        return(
            <div className={"formulario"}>
                <h2 className={"login_texto"}>Login</h2>
                <form onSubmit={this.onSubmit} >
                    <div className="form-row" id="radio">
                        <FormGroup className="col-md-6">
                           <Input type="radio" id="tipo_id" name="tipo" value="cnpj" clickedCNPJ={true} clickedCPF={false}
                           onClick={this.CNPJHandler}/> CNPJ<br/>
                           <Input type="radio" id="tipo_id" name="tipo" value="cpf" clickedCPF={this.state.clickedCPF} clickedCNPJ={false}
                           onClick={this.CPFHandler}/> CPF
                           {radioCPF}
                           {radioCNPJ}
                        </FormGroup>
                    </div>
                    <div id='cnpj_div'style={{ display: this.state.clickedCNPJ ? 'block' : 'none'}}>
                        <div className="form-row" >
                            <FormGroup className="col-md-6">
                                <Label for="inputCNPJ" >CNPJ</Label>
                                <Input  id="inputCNPJ" name="cnpj" value={this.state.cnpj} onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup className="col-md-6">
                                <Label for="inputRazao">Razão Social</Label>
                                <Input type="text"  id="inputRazao" name="name" value={this.state.name} onChange={this.onChange} />
                            </FormGroup>
                        </div>
                        <div className="form-row">
                            <FormGroup className="col-md-6">
                                <Label for="inputZip">CEP</Label>
                                <Input type="text"  id="inputZip" name="zipCode" value={this.state.zipCode} onChange={this.onChange}/>
                            </FormGroup>
                            <FormGroup className="col-md-6">
                                <Label for="inputStreet">Rua</Label>
                                <Input type="text"  id="inputStreet" name="street" value={this.state.street} onChange={this.onChange} />
                            </FormGroup>
                        </div>
                        <div className="form-row">
                            <FormGroup className="col-md-6">
                                <Label for="inputCity">Cidade</Label>
                                <Input type="text"  id="inputCity" name="city" value={this.state.city} onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup className="col-md-2">
                                <Label for="inputState">Estado</Label>
                                <Input type="text" id="inputState"  name="state" value={this.state.state} onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup className="col-md-4">
                                <Label for="inputBairro">Bairro</Label>
                                <Input type="text" id="inputBairro" name="neighborhood" value={this.state.neighborhood}  onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup className="col-md-4">
                                <Label for="inputComplement">Complemento</Label>
                                <Input type="text" id="inputComplement" name="addOn" value={this.state.addOn} onChange={this.onChange}  />
                            </FormGroup>
                            <FormGroup className="col-md-2">
                                <Label for="inputNumber">Numero</Label>
                                <Input type="text" id="inputNumber" name="addreddNumber" value={this.state.addreddNumber} onChange={this.onChange}  />
                            </FormGroup>
                            <FormGroup className="col-md-6">
                                <Label for="inputTel">Telefone</Label>
                                <Input type="text" id="inputTel" name="phone" value={this.state.phone} onChange={this.onChange}  />
                            </FormGroup>
                        </div>
                    </div>
                        <div id="cpf_div" style={{display: this.state.clickedCPF ? 'block' : 'none'}}>
                            <div className="form-row" >
                                <FormGroup className="col-md-6">
                                    <Label for="inputCpf" >CPF</Label>
                                    <Input  id="inputCpf" name="cpf" value={this.state.cpf} onChange={this.onChange} />
                                </FormGroup>
                                <FormGroup className="col-md-6">
                                    <Label for="inputNome">Nome</Label>
                                    <Input type="text"  id="inputNome" name="name" value={this.state.name} onChange={this.onChange} />
                                </FormGroup>
                            </div>
                            <div className="form-row">
                                <FormGroup className="col-md-6">
                                    <Label for="inputZip">CEP</Label>
                                    <Input type="text"  id="inputZip" name="zipCode" value={this.state.zipCode} onChange={this.onChange}/>
                                </FormGroup>
                                <FormGroup className="col-md-6">
                                    <Label for="inputStreet">Rua</Label>
                                    <Input type="text"  id="inputStreet" name="street" value={this.state.street} onChange={this.onChange} />
                                </FormGroup>
                            </div>
                            <div className="form-row">
                                <FormGroup className="col-md-6">
                                    <Label for="inputCity">Cidade</Label>
                                    <Input type="text"  id="inputCity" name="city" value={this.state.city} onChange={this.onChange} />
                                </FormGroup>
                                <FormGroup className="col-md-2">
                                    <Label for="inputState">Estado</Label>
                                    <Input type="text" id="inputState" name="state" value={this.state.state} onChange={this.onChange} />
                                </FormGroup>
                                <FormGroup className="col-md-4">
                                    <Label for="inputBairro">Bairro</Label>
                                    <Input type="text" id="inputBairro" name="neighborhood" value={this.state.neighborhood} onChange={this.onChange} />
                                </FormGroup>
                                <FormGroup className="col-md-4">
                                    <Label for="inputComplement">Complemento</Label>
                                    <Input type="text" id="inputComplement" name="addOn" value={this.state.addOn} onChange={this.onChange}  />
                                </FormGroup>
                                <FormGroup className="col-md-2">
                                    <Label for="inputNumber">Numero</Label>
                                    <Input type="text" id="inputNumber" name="addreddNumber" value={this.state.addreddNumber} onChange={this.onChange}  />
                                </FormGroup>
                                <FormGroup className="col-md-6">
                                    <Label for="inputTel">Telefone</Label>
                                    <Input type="text" id="inputTel" name="phone" value={this.state.phone} onChange={this.onChange}  />
                                </FormGroup>
                            </div>
                    </div>
                    <Button type="submit" color="info">Entrar</Button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(
    <InputC />,

  document.getElementById('root')
);

