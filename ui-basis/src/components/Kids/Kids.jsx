import React, { Component} from 'react'

import ReactPlayer from "react-player"


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
                            <ReactPlayer url="https://www.youtube.com/watch?v=soAgZSIQnEY" controls={true}/>
                            <ReactPlayer url="https://www.youtube.com/watch?v=95dacCCZanE" controls={true}/>
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