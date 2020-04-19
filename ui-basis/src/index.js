import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Col} from "react-bootstrap";

class Input extends React.Component{
    constructor() {
        super();
        this.state = {
            nome: "",
            cnpj: "",
            cep: "",
            numero: "",
            complemento: ""
        };
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

    render(){
        return(<div className={"formulario"}>
                <Form>
                    <h2>Cadastro de loja</h2>
                    <br />
                    <Form.Row>
                        <Form.Group as={Col} controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="senha">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password"/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="cnpj">
                            <Form.Label>CNPJ</Form.Label>
                            <Form.Control name="cnpj" value={this.state.cnpj} onChange={this.onChange}  />
                        </Form.Group>
                        <Form.Group as={Col} controlId="razao_social">
                            <Form.Label>Razão Social</Form.Label>
                            <Form.Control name="nome" value={this.state.nome} onChange={this.onChange} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group controlId="cep">
                            <Form.Label>CEP</Form.Label>
                            <Form.Control  name="cep" value={this.state.cep} onChange={this.onChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="rua">
                            <Form.Label>Rua</Form.Label>
                            <Form.Control disabled />
                        </Form.Group>

                        <Form.Group as={Col} controlId="cidade">
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control disabled />
                        </Form.Group>

                        <Form.Group as={Col} controlId="estado">
                            <Form.Label>Estado</Form.Label>
                            <Form.Control as="select" value="Choose...">
                                <option>Mg</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="bairro">
                            <Form.Label>Bairro</Form.Label>
                            <Form.Control  disabled/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="numero">
                            <Form.Label>Numero</Form.Label>
                            <Form.Control  name="numero" value={this.state.numero} onChange={this.onChange}></Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="complemento">
                            <Form.Label>Complemento</Form.Label>
                            <Form.Control name="complemento" value={this.state.complemento} onChange={this.onChange}></Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" onSubmit={this.state} type="submit">
                        Enviar
                    </Button>
                </Form>

            </div>
        );
    }
}

ReactDOM.render(
    <Input />,

  document.getElementById('root')
);

