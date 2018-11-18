import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router'
import logo from './logo.svg';

class App extends Component {
  render() {
    return <div>
      <Route exact path="/landing" />
      <Route path="/register" />
      <Route path="/login" />
      <Route path="/home" />
      <Route path="/profile" />
      <Route path="/create-partyup" />
      <Route path="/partyup" />
      <Route path="/search-partyups" />
    </div>
  }
}

export default App;
