import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import App from './components/app/app.js'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} >
    </Route>        
  </Router>
, document.getElementById('root'));
