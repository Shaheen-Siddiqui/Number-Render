import React from 'react';
import './index.css';
import ReactDom from 'react-dom';
import App from './App'
import {BrowserRouter as Router } from 'react-router-dom';



const Element = document.getElementById("root")
ReactDom.render(
 <Router>
 <App/>
 </Router>
 ,
Element
);

