import React, { Component} from 'react'

import '../../assets/scss/Form.scss'
import corona from '../../assets/img/coronared.png'
import cnn from '../../assets/img/cnn.png'
import globo from '../../assets/img/globo.png'
import min from '../../assets/img/min.png'
import record from '../../assets/img/record.png'
import elpais from '../../assets/img/elpais.png'
import google from '../../assets/img/googlenews.png'

import { TwitterHashtagButton, TwitterTimelineEmbed } from 'react-twitter-embed';


class FeedNews extends Component {
    state = { show: false };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };
    
    render() {
        return (
            <div id="wrapper">
		        <div id="main">
		            <div className="inner">
                        <section className="banner">
                            <div className="content">
                            <header>
                                <h2>Noticias</h2>
                                <hr />
                                <center>
                                <img alt="corona"  widht="400px" height="300px" src={corona} /></center>
                            </header>
                            <hr/>
                            <p>Informações atualizadas do COVID-19 no Brasil e no mundo.</p>
                            <br/>
                            <center>
                            <a href="https://www.cnnbrasil.com.br/search?q=coronavirus">
                                <img alt="cnn"  widht="90px" height="90px" src={cnn} />
                            </a>{' '}
                            <a href="https://www.globo.com/busca/?q=coronavirus">
                                <img alt="globo"  widht="90px" height="90px" src={globo} />
                            </a>{' '}
                            <a href="https://www.saude.gov.br/noticias">
                                <img alt="min"  widht="100px" height="100px" src={min} />
                            </a>{' '}
                            <a href="https://busca.r7.com/?q=coronavirus#gsc.tab=0&gsc.q=coronavirus&gsc.page=1">
                                <img alt="record"  widht="100px" height="100px" src={record} />
                            </a>{' '}
                            <a href="https://brasil.elpais.com/noticias/coronavirus/">
                                <img alt="elpais"  widht="100px" height="100px" src={elpais} />
                            </a>{' '}
                            <a href="https://news.google.com/topics/CAAqBwgKMN30lwsw_J2vAw?hl=pt-BR&gl=BR&ceid=BR%3Apt-419">
                                <img alt="google"  widht="120px" height="100px" src={google} />
                            </a>{' '}
                            </center>
                            <br/>
                            <TwitterHashtagButton tag={'coronavirus'} /> 
                            <br/>
                            <iframe src="https://covid.saude.gov.br/" width="680" height="480" title="saude" allowfullscreen></iframe>
                            <br/>
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName="minsaude"
                                options={{height: 400}}
                            />
                            </div>
                    </section>
                </div>
      		</div>
		</div>
        )
    }
}
  

export default FeedNews