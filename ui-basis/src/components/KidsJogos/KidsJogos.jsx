import React, { Component} from 'react'

import { Button, Card, CardDeck } from 'reactstrap'
import '../../assets/scss/Form.scss'
import jogo from '../../assets/img/jogo1.png'
import jogo2 from '../../assets/img/jogo.png'
import jogo3 from '../../assets/img/jogo2.png'
import manete from '../../assets/img/manete.png'

class KidsJogos extends Component {
    
    render() {
        return (
            <div id="wrapper">
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
                            <h3><img alt="covid" src={manete} width="70px"/> Jogos</h3>
                            <CardDeck>
                                <Card border="primary" style={{ width: '18rem' }}>
                                    <a href="http://www.escolagames.com.br/jogos/prevencaoCoronavirus/?deviceType=computer">
                                        <Card.Img variant="top" src={jogo} />
                                    </a>
                                    <Card.Body>
                                        <Card.Title>Prevenção Coronavírus</Card.Title>
                                        <a href="http://www.escolagames.com.br/jogos/prevencaoCoronavirus/?deviceType=computer">
                                            <Button variant="danger">Jogar</Button>
                                        </a>
                                    </Card.Body>
                                </Card> {''}
                                <Card border="danger" style={{ width: '18rem' }}>
                                    <a href="http://www.multirio.rj.gov.br/index.php/interaja/jogos-educativos/15792-jogo-da-mem%C3%B3ria-rio-contra-o-corona">
                                        <Card.Img variant="top" src={jogo2} />
                                    </a>
                                    <Card.Body>
                                        <Card.Title>Jogo da memória</Card.Title>
                                        <a href="http://www.multirio.rj.gov.br/index.php/interaja/jogos-educativos/15792-jogo-da-mem%C3%B3ria-rio-contra-o-corona">
                                            <Button variant="danger">Jogar</Button>
                                        </a>
                                    </Card.Body>
                                </Card> {''}
                                <Card border="warning" style={{ width: '18rem' }}>
                                    <a href="http://www.multirio.rj.gov.br/index.php/interaja/jogos-educativos/15967-pode-n%C3%A3o-poder">
                                        <Card.Img variant="top" src={jogo3} />
                                    </a>
                                    <Card.Body>
                                        <Card.Title>Pode ou não pode?</Card.Title>
                                        <a href="http://www.multirio.rj.gov.br/index.php/interaja/jogos-educativos/15967-pode-n%C3%A3o-pode">
                                            <Button variant="danger">Jogar</Button>
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
  

export default KidsJogos