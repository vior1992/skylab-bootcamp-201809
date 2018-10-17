import React, { Component } from 'react';
import Home from './components/Home'
import Landing from './components/Landing'
import Register from './components/Register'
import Login from './components/Login'


class App extends Component {



  render() {
      return <section>
          <Landing/>
          <Register/>
          <Login/>
          <Home/>
      </section >
  }
}

export default App;
