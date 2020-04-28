import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormGroup, Label, Input, Button} from "reactstrap";
import "./assets/css/bootstrap.min.css";
import "./assets/css/paper-kit.css";


class InputC extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            cnpj: "",
            cpf:"",
            cep: "",
            numero: "",
            complemento: "",
            telefone: "",
            clickedCNPJ: false, 
            clickedCPF: false
        };
        this.CNPJHandler = this.CNPJHandler.bind(this);
        this.CPFHandler = this.CPFHandler.bind(this);

        this.onChange = (evento) => {
            const  state = Object.assign({}, this.state);
            const campo = evento.target.name;
            state[campo] = evento.target.value;
            this.setState(state);
        };
        this.onSubmit = (evento) => {
            evento.preventDefault();
            console.log(this.state);
        };
      
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

    render(){
        const radioCPF = this.state.clickedCPF ;

        const radioCNPJ = this.state.clickedCNPJ ;
        return(
            <div className={"formulario"}>
                <h2 className={"login_texto"}>Login</h2>
                <form>
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
                    <div id='cnpj_div' style={{ display: this.state.clickedCNPJ ? 'block' : 'none'}}>
                        <div className="form-row" >
                            <FormGroup className="col-md-6">
                                <Label for="inputCNPJ" >CNPJ</Label>
                                <Input  id="inputCNPJ" value={this.state.cnpj} onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup className="col-md-6">
                                <Label for="inputRazao">Razão Social</Label>
                                <Input type="text"  id="inputRazao" disabled />
                            </FormGroup>
                        </div>
                        <div className="form-row">
                            <FormGroup className="col-md-6">
                                <Label for="inputZip">CEP</Label>
                                <Input type="text"  id="inputZip" value={this.state.cep} onChange={this.onChange}/>
                            </FormGroup>
                            <FormGroup className="col-md-6">
                                <Label for="inputStreet">Rua</Label>
                                <Input type="text"  id="inputStreet" disabled/>
                            </FormGroup>
                        </div>
                        <div className="form-row">
                            <FormGroup className="col-md-6">
                                <Label for="inputCity">Cidade</Label>
                                <Input type="text"  id="inputCity" disabled/>
                            </FormGroup>
                            <FormGroup className="col-md-2">
                                <Label for="inputState">Estado</Label>
                                <Input type="text" id="inputState" disabled />
                            </FormGroup>
                            <FormGroup className="col-md-4">
                                <Label for="inputBairro">Bairro</Label>
                                <Input type="text" id="inputBairro" disabled />
                            </FormGroup>
                            <FormGroup className="col-md-4">
                                <Label for="inputComplement">Complemento</Label>
                                <Input type="text" id="inputComplement" value={this.state.complemento} onChange={this.onChange}  />
                            </FormGroup>
                            <FormGroup className="col-md-2">
                                <Label for="inputNumber">Numero</Label>
                                <Input type="text" id="inputNumber" value={this.state.numero} onChange={this.onChange}  />
                            </FormGroup>
                            <FormGroup className="col-md-6">
                                <Label for="inputTel">Telefone</Label>
                                <Input type="text" id="inputTel" value={this.state.telefone} onChange={this.onChange}  />
                            </FormGroup>
                        </div>
                    </div>
                        <div id="cpf_div" style={{display: this.state.clickedCPF ? 'block' : 'none'}}>
                            <div className="form-row" >
                                <FormGroup className="col-md-6">
                                    <Label for="inputCpf" >CPF</Label>
                                    <Input  id="inputCpf" value={this.state.cpf} onChange={this.onChange} />
                                </FormGroup>
                                <FormGroup className="col-md-6">
                                    <Label for="inputNome">Nome</Label>
                                    <Input type="text"  id="inputNome" disabled />
                                </FormGroup>
                            </div>
                            <div className="form-row">
                                <FormGroup className="col-md-6">
                                    <Label for="inputZip">CEP</Label>
                                    <Input type="text"  id="inputZip" value={this.state.cep} onChange={this.onChange}/>
                                </FormGroup>
                                <FormGroup className="col-md-6">
                                    <Label for="inputStreet">Rua</Label>
                                    <Input type="text"  id="inputStreet" disabled/>
                                </FormGroup>
                            </div>
                            <div className="form-row">
                                <FormGroup className="col-md-6">
                                    <Label for="inputCity">Cidade</Label>
                                    <Input type="text"  id="inputCity" disabled/>
                                </FormGroup>
                                <FormGroup className="col-md-2">
                                    <Label for="inputState">Estado</Label>
                                    <Input type="text" id="inputState" disabled />
                                </FormGroup>
                                <FormGroup className="col-md-4">
                                    <Label for="inputBairro">Bairro</Label>
                                    <Input type="text" id="inputBairro" disabled />
                                </FormGroup>
                                <FormGroup className="col-md-4">
                                    <Label for="inputComplement">Complemento</Label>
                                    <Input type="text" id="inputComplement" value={this.state.complemento} onChange={this.onChange}  />
                                </FormGroup>
                                <FormGroup className="col-md-2">
                                    <Label for="inputNumber">Numero</Label>
                                    <Input type="text" id="inputNumber" value={this.state.numero} onChange={this.onChange}  />
                                </FormGroup>
                                <FormGroup className="col-md-6">
                                    <Label for="inputTel">Telefone</Label>
                                    <Input type="text" id="inputTel" value={this.state.telefone} onChange={this.onChange}  />
                                </FormGroup>
                            </div>
                    </div>
                    <Button type="submit" onSubmit={this.state} color="info">Entrar</Button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(
    <InputC />,

  document.getElementById('root')
);

