import React from 'react';
import reactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './stylesheets/style.css'
import App from './Components/App';

reactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));
