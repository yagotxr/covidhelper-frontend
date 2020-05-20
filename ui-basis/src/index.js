import React from 'react';
import { render } from 'react-dom';
import "./assets/css/bootstrap.min.css";
import "./assets/css/paper-kit.css";
import "./assets/demo/demo.css";
import {StoreForm} from './components/StoreForm'

render(
      <StoreForm />,
  document.getElementById('root')
);

