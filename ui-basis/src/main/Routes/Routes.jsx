import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import StoreForm from '../../components/StoreForm/StoreForm';
import ProductForm from '../../components/ProductForm/ProductForm';
import NoMatch from '../../components/NoMatch/NoMatch';
import Login from '../../components/Login/Login';
import Kids from '../../components/Kids/Kids';
import Yago from '../../components/Yago/Yago';

export class Routes extends Component {
    render() {
        return (
            <main className="container">
                <Switch>
                    <Route exact path='/' component={StoreForm}/>
                    <Route path='/lojas' component={StoreForm}/>
                    <Route path='/produtos' component={ProductForm}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/kids' component={Kids}/>
                    <Route path='/yago' component={Yago}/>
                    <Route component={NoMatch}></Route>
                </Switch>
            </main>
        )
    }
};

export default Routes;