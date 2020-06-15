import React, { Component} from 'react'

import { Button, Card, CardDeck } from 'react-bootstrap'
import '../../assets/scss/Form.scss'

import manete from '../../assets/img/lapis.png'
import ativ1 from '../../assets/img/ativ1.jpg'
import ativ2 from '../../assets/img/ativ2.jpg'
import ativ3 from '../../assets/img/ativ3.jpg'
import ativ4 from '../../assets/img/ativ4.jpg'
import ativ5 from '../../assets/img/ativ5.jpg'
import ativ6 from '../../assets/img/ativ6.jpg'

class KidsAtividades extends Component {
    
    render() {
        return (
            <div className="wrapper">
		        <div id="main">
		            <div className="inner">
                        <section id="banner">
                            <div className="content">
                            <header>
                                <h2>Espaço Kids</h2>
                                <hr />
                                <a href="/kids">
                                        <Button variant="light">Voltar</Button>
                                    </a>
                                </header>
                            <h3><img alt="covid" src={manete} width="50px"/> Atividades</h3>
                            <CardDeck>
                                <Card border="warning" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={ativ1} />
                                    <Card.Body>
                                        <a href={ativ1} download>
                                          <Button variant="danger">Baixar</Button>
                                        </a>
                                    </Card.Body>
                                </Card> {''}
                                <Card border="danger" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={ativ2}/>
                                    <Card.Body>
                                        <a href={ativ2} download>
                                            <Button variant="danger">Baixar</Button>
                                        </a>
                                    </Card.Body>
                                </Card> {''}
                                <Card border="primary" style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={ativ3} />
                                    <Card.Body>
                                        <a href={ativ3} download>
                                            <Button variant="danger">Baixar</Button>
                                        </a>
                                    </Card.Body>
                                </Card> 
                            </CardDeck>
                            <br/>
                            <CardDeck>
                                <Card border="primary" style={{ width: '18rem' }}>
                                    <Card.Img style={{ height: '400px' }} variant="top" src={ativ4} />
                                    <Card.Body>
                                        <a href={ativ4} download>
                                            <Button variant="danger">Baixar</Button>
                                        </a>
                                    </Card.Body>
                                </Card> {''}
                                <Card border="warning" style={{ width: '18rem' }}>
                                    <Card.Img style={{ height: '400px' }} variant="top" src={ativ5} />
                                    <Card.Body>
                                        <a href={ativ5} download>
                                            <Button variant="danger">Baixar</Button>
                                        </a>
                                    </Card.Body>
                                </Card> {''}
                                <Card border="danger" style={{ width: '18rem' }}>
                                    <Card.Img style={{ height: '400px' }} variant="top" src={ativ6} />
                                    <Card.Body>
                                        <a href={ativ6} download>
                                            <Button variant="danger">Baixar</Button>
                                        </a>
                                    </Card.Body>
                                </Card> 
                            </CardDeck>
                            <footer>
                                <br/>
                            </footer>
                            </div>
                    </section>
                </div>
      		</div>
		</div>
        )
    }
}
  

export default KidsAtividades