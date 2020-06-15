import React, { Component} from 'react'

import { Button, Card } from 'react-bootstrap'
import '../../assets/scss/Form.scss'
import jogo from '../../assets/img/jogo1.png'
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
                                </header>
                            <h3><img alt="covid" src={manete} width="70px"/> Jogos</h3>
                            <Card style={{ width: '18rem' }}>
                                <a href="http://www.escolagames.com.br/jogos/prevencaoCoronavirus/?deviceType=computer">
                                    <Card.Img variant="top" src={jogo} />
                                </a>
                                <Card.Body>
                                    <Card.Title>Prevenção Coronavírus</Card.Title>
                                    <Card.Text>
                                    Aprenda agora como se prevenir do Coronavírus!
                                    </Card.Text>
                                    <a href="http://www.escolagames.com.br/jogos/prevencaoCoronavirus/?deviceType=computer">
                                        <Button variant="danger">Jogar</Button>
                                    </a>
                                </Card.Body>
                            </Card> 
                            </div>
                    </section>
                </div>
      		</div>
		</div>
        )
    }
}
  

export default KidsJogos