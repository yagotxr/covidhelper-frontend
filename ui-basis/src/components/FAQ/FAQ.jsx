import React, { Component } from 'react'
import {Form, Input, Label, Button
} from 'reactstrap'

class FAQ extends Component {

    state = { showing: true, showing2: false, showing3: false, showing4: false, showing5: false, showing6: false};
    
        render() {
        const { showing, showing2, showing3, showing4, showing5, showing6 } = this.state;
        return (
            
            <div>
                <br></br>
                <h3>Coronavírus - Perguntas e respostas</h3>
                <hr/>
                <br></br>
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left"  onClick={() => this.setState({ showing: !showing })}type="button">
                            1. O que é o novo Coronavírus?
                            </button>
                        </h2>
                    </div>

                    <div style={{ display: (showing ? 'block' : 'none') } }id="collapseOne" >
                        <div class="card-body">
                        <p>O novo coronavírus é assim chamado pois não havia sido identificado anteriormente, sendo descoberto em 31/12/2019, após casos registrados na China.
                        <br/><br/>
                        Os coronavírus são uma grande família de vírus que podem causar doenças em humanos ou em animais. O diagnóstico do novo coronavírus causador da doença Covid-19 não é igual ao diagnóstico dos coronavírus que comumente circulam entre humanos e que causam doenças leves a moderadas como o resfriado comum.
                        </p>
                        </div>
                    </div>
                
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left"  onClick={() => this.setState({ showing2: !showing2 })}type="button">
                            2. Quais são os sintomas do Covid-19?
                            </button>
                        </h2>
                    </div>

                    <div style={{ display: (showing2 ? 'block' : 'none') } }id="collapseOne" >
                        <div class="card-body">
                            <p>Os sintomas variam de moderados a graves, podendo causar morte.</p>
                            <p>Sensação febril ou febre, mesmo que relatada, acompanhada de tosse OU dor de garganta OU coriza OU dificuldade respiratória OU dificuldade para respirar podem aparecer de 2 a 14 dias após a contaminação com o novo coronavírus.
                            </p>
                            <p>Algumas pessoas infectadas com o novo coronavírus podem não apresentar sintomas, no entanto, mesmo assim transmitem o vírus.
                            </p>
                        </div>
                    </div>
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left"  onClick={() => this.setState({ showing3: !showing3 })}type="button">
                            3. Como o vírus é transmitido?
                            </button>
                        </h2>
                    </div>

                    <div style={{ display: (showing3 ? 'block' : 'none') } }id="collapseOne" >
                        <div class="card-body">
                            <p>A transmissão do novo coronavírus ocorre de uma pessoa doente para outra através da dispersão pelo ar de gotículas contaminadas do nariz ou da boca, que também podem se espalhar no ambiente e se depositar em objetos e superfícies.
                            </p>
                            <p>Ao tocar esses objetos e superfícies contaminados, e depois tocar os olhos, o nariz ou a boca, outra pessoa pode se contaminar.</p>
                            
                            <p>Além disso, qualquer pessoa que tenha contato próximo (cerca de 1m) com alguém com sintomas respiratórios está em risco de ser exposta à infecção.</p>

                            <p>O novo coronavírus também é transmitido por pessoas que não apresentam sintomas.</p>
                        </div>
                    </div>
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left"  onClick={() => this.setState({ showing4: !showing4 })}type="button">
                            4. Como evitar a transmissão?
                            </button>
                        </h2>
                    </div>

                    <div style={{ display: (showing4 ? 'block' : 'none') } }id="collapseOne" >
                        <div class="card-body">
                            <p>Cubra nariz e boca com um lenço de papel ou com o antebraço ao tossir ou espirrar. Descarte o lenço de papel usado em uma lixeira. Lave imediatamente suas mãos com água e sabão por pelo menos 20 segundos. Se não tiver água e sabão, use álcool em gel a 70%.
                                <br/><br/>
                                Lave frequentemente as mãos até a altura dos punhos com água e sabão por pelo menos 20 segundos, principalmente depois de ter frequentado um local público ou depois de tossir, espirrar ou tocar nariz ou boca. Se não tiver água e sabão, use álcool em gel a 70%.
                                <br/><br/>
                                Evite tocar olhos, nariz e boca com as mãos sujas.
                                <br/><br/>
                                Evite contato próximo. Mantenha uma distância segura (cerca de 2m) de outras pessoas.
                                <br/><br/>
                                Não compartilhe objetos de uso pessoal, como talheres, pratos, copos e garrafas.
                                <br/><br/>
                                Evite aglomerações e mantenha os ambientes ventilados.
                                <br/><br/>
                                Evite sair de casa sem necessidade.
                                <br/><br/>
                                Use uma máscara facial de tecido ao sair de casa. As orientações sobre o uso de máscaras faciais de tecido estão disponíveis <a href="https://portalarquivos.saude.gov.br/images/pdf/2020/April/06/Nota-Informativa.pdf">aqui</a>
                                <br/><br/>
                                Limpe e desinfete frequentemente objetos e superfícies que são tocadas diariamente, como mesas, maçanetas, interruptores, bancadas, torneiras, instalações sanitárias, telefones celulares e chaves.</p>
                        </div>
                    </div>
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left"  onClick={() => this.setState({ showing5: !showing5 })}type="button">
                            5. Quando devo procurar atendimento médico?
                            </button>
                        </h2>
                    </div>

                    <div style={{ display: (showing5 ? 'block' : 'none') } }id="collapseOne" >
                        <div class="card-body">
                            <p>Caso você desenvolva um dos sinais de alerta de emergência para COVID-19, procure imediatamente a emergência do hospital mais próximo. Os sinais de alerta de emergência incluem:
                            <br/><br/>
                            - Febre e tosse
                            <br/><br/>
                            - Febre e dificuldade para respirar
                            <br/><br/>
                            - Dor ou pressão persistente no peito
                            <br/><br/>
                            - Confusão mental
                            <br/><br/>
                            - Lábios ou rosto azulados
                            <br/><br/>
                            Caso você tenha sintomas de uma gripe leve, fique em casa, adote o isolamento social e todas as recomendações para prevenção da Covid-19 descritos na pergunta 4.
                            </p>
                        </div>
                    </div>
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left"  onClick={() => this.setState({ showing6: !showing6 })}type="button">
                            Mais informações
                            </button>
                        </h2>
                    </div>
                    <div style={{ display: (showing6 ? 'block' : 'none') } }id="collapseOne" >
                        <div class="card-body">
                            <p>
                                - <a href='https://saude.gov.br/saude-de-a-z/novocoronavirus'>https://saude.gov.br/saude-de-a-z/novocoronavirus </a>
                                <br/>
                                - <a href='http://portal.anvisa.gov.br/coronavirus'>http://portal.anvisa.gov.br/coronavirus</a>
                                <br/>
                                - <a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019'>https://www.who.int/emergencies/diseases/novel-coronavirus-2019</a>

                            </p>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}

export default FAQ