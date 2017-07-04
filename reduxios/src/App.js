import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ViewOne from './views/ViewOne'
import ViewTwo from './views/ViewTwo'
import ViewThree from './views/ViewThree'

import { Switch, BrowserRouter, Route, Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
           <Route exact path="/" component={ViewOne} />
           <Route path="/two" component={ViewTwo} />
           <Route Path="/three" component={ViewThree} />
          </Switch>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
