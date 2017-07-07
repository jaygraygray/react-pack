import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import ViewOne from './views/ViewOne'
import ViewTwo from './views/ViewTwo'
import ViewThree from './views/ViewThree'

import { Switch, HashRouter, Route } from 'react-router-dom'

import { Provider } from 'react-redux'

import store from './ducks/store'

ReactDOM.render(
<HashRouter>
  <Provider store={ store }>
    <Switch>
      <Route exact path="/" component={ViewOne} />
      <Route path="/two" component={ViewTwo} />
      <Route path="/three" component={ViewThree} />
    </Switch>
  </Provider>
</HashRouter>
, 
document.getElementById('root'));
registerServiceWorker();
