import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import StoreForm from '../../components/StoreForm/StoreForm';
import Products from "../../components/Products/Products";
import StoreProfile from '../../components/StoreProfile/StoreProfile';
import ProductForm from '../../components/ProductForm/ProductForm';
import NoMatch from '../../components/NoMatch/NoMatch';
import Kids from '../../components/Kids/Kids';
import KidsJogos from '../../components/KidsJogos/KidsJogos';
import KidsAtividades from '../../components/KidsAtividades/KidsAtividades';
import FeedNews from '../../components/FeedNews/FeedNews';
import Home from '../../components/Home/Home';
import AuthRedirectHandler from '../../components/AuthRedirectHandler/AuthRedirectHandler';

export class Routes extends Component {
    render() {
        return (
            <main className="container">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/lojas' component={StoreForm}/>
                    <Route path='/minhasLojas' component={StoreProfile}/>
                    <Route path='/produtos' component={ProductForm}/>
                    <Route path='/loja/{lojaId}/produtos' component={Products}/>
                    <Route path='/kids' component={Kids}/>
                    <Route path='/jogos' component={KidsJogos}/>
                    <Route path='/atividades' component={KidsAtividades}/>
                    <Route path='/noticias' component={FeedNews}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/oauth2/redirect' component={AuthRedirectHandler}/>
                    <Route component={NoMatch}></Route>
                </Switch>
            </main>
        )
    }
};

export default Routes;