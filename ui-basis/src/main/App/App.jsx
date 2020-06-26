import React, {Component} from 'react';
import {BrowserRouter as Router } from 'react-router-dom';

import Routes from '../Routes/Routes';
import Navbar from '../../components/Navbar/Navbar';

class App extends Component {

    render() {
        return (
            <div>

                <Navbar/>
                <Router>
                    <div>
                        <Routes/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;