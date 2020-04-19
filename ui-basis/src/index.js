import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Input extends React.Component{
    constructor() {
        super();
        this.state = {
            nome: "",
            cnpj: "",
            cep: "",
            numero: ""
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
        return(<div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div>
                    <h2>Cadastro</h2>
                    Nome da loja:  <input name="nome" value={this.state.nome} onChange={this.onChange} type="text"/> < br />
                    CNPJ: <input name="cnpj" value={this.state.cnpj} onChange={this.onChange} type="text"/> < br />
                    Razão Social:<input type="text" disabled /> <br />
                    CEP:<input name="cep" value={this.state.cep} onChange={this.onChange} type="text"/> < br />
                    Rua: <input type="text" disabled /> <br />
                    Bairro: <input type="text" disabled /> <br />
                    Complemento: <input type="text" disabled /> <br />
                    Cidade: <input type="text" disabled /> <br />
                    Estado: <input type="text" disabled /> <br />
                    Número: <input name="numero" value={this.state.numero} onChange={this.onChange} type="text"/>
                    <br />
                    <button onClick={this.onSubmit}>enviar</button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
  <Input />,
  document.getElementById('root')
);

