import React, { Component } from 'react'
import './Form.scss'
import {
    FormGroup,
    Input,
    Label,
    Button
} from 'reactstrap'

class StoreForm extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <FormGroup>
                    <FormGroup>
                        <Label> Nome
                        <Input type="text"></Input>
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label> CNPJ
                        <Input type="text"></Input>
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label> CEP
                         <Input type="text"></Input>
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label> Rua
                           <Input type="text"></Input>
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label> Cidade
                          <Input type="text"></Input>
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label> Estado
                         <Input type="text"></Input>
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label> Complemento
                            <Input type="text"></Input>
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label> Numero
                            <Input type="text"></Input>
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label> Telefone
                            <Input type="text"></Input>
                        </Label>
                    </FormGroup>

                    <Button color='primary' size='sm' type='submit'>Cadastrar</Button>
            </FormGroup>
        )
    }
}

export default StoreForm