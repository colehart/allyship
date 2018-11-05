import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './containers/App/index.js';

const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('root'));

