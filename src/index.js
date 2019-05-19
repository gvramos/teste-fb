import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      
      <Route exact path='/edit/:id' component={Edit} />
      
      <Route exact path='/create' component={Create} />
      <Route exact path='/show/:id' component={Show} />
      
    </div>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
