import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Switch } from 'react-router'
import './index.css';
import App from './App';
import Login from './Login';
import Settings from './Settings';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/Settings" component={Settings}/>
    </Switch>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
