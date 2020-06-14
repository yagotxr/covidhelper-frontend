import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import StoreForm from '../../components/StoreForm/StoreForm';
import ProductForm from '../../components/ProductForm/ProductForm';
import NoMatch from '../../components/NoMatch/NoMatch';
import Login from '../../components/Login/Login';

export class Routes extends Component {
    render() {
        return (
            <main className="container">
                <Switch>
                    <Route exact path='/' component={StoreForm}/>
                    <Route path='/lojas' component={StoreForm}/>
                    <Route path='/produtos' component={ProductForm}/>
                    <Route path='/login' component={Login}/>
                    <Route component={NoMatch}></Route>
                </Switch>
            </main>
        )
    }
};

export default Routes;