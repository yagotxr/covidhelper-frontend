import React, { Component} from 'react'

import ReactPlayer from "react-player"
import { Button } from 'react-bootstrap'
import '../../assets/scss/Form.scss'
import corona from '../../assets/img/corona1.jpg'

class Kids extends Component {
    
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
                                <p>Um espaço divertido e diferenciado com conteúdo informativo para as crianças sobre o novo coronavirus.</p>
                            </header>
                            <img alt="corona" src={corona} />
                            <div className="mb-2">
                                <Button variant="warning" size="lg"><a href="/jogos" >Jogos</a>
                                </Button>{' '}
                                <Button variant="secondary" size="lg">
                                Large button
                                </Button>
                            </div>
                            <h5>Você sabe o que é o Coronavirus?</h5>
                            <ReactPlayer url="https://www.youtube.com/watch?v=soAgZSIQnEY" controls={true}/>
                            <br/>
                            <h5>Como combater o Coronavirus?</h5>
                            <ul>
                                <li>Usar máscara</li>
                                <li>Lavar as mãos</li>
                                <li>Usar alcool em gel</li>
                                <li>Evitar aglomerações</li>
                            </ul>
                            <ReactPlayer url="https://www.youtube.com/watch?v=5rLGlL3sl9I" controls={true}/>
                        </div>
                    </section>
                </div>
      		</div>
		</div>
        )
    }
}
  

export default Kids