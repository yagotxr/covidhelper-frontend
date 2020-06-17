import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import StoreForm from '../../components/StoreForm/StoreForm';
import ProductForm from '../../components/ProductForm/ProductForm';
import NoMatch from '../../components/NoMatch/NoMatch';
import Kids from '../../components/Kids/Kids';
import KidsJogos from '../../components/KidsJogos/KidsJogos';
import Yago from '../../components/Yago/Yago';
import KidsAtividades from '../../components/KidsAtividades/KidsAtividades';
import FeedNews from '../../components/FeedNews/FeedNews';

export class Routes extends Component {
    render() {
        return (
            <main className="container">
                <Switch>
                    <Route exact path='/' component={StoreForm}/>
                    <Route path='/lojas' component={StoreForm}/>
                    <Route path='/produtos' component={ProductForm}/>
                    <Route path='/kids' component={Kids}/>
                    <Route path='/jogos' component={KidsJogos}/>
                    <Route path='/yago' component={Yago}/>
                    <Route path='/atividades' component={KidsAtividades}/>
                    <Route path='/noticias' component={FeedNews}/>
                    <Route component={NoMatch}></Route>
                </Switch>
            </main>
        )
    }
};

export default Routes;