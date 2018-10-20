import React, { Component } from 'react'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import logic from './logic'

class App extends Component {
  state={}

  handleRegisterSubmit = (name, surname, username, password) => {
    logic.register(name, surname, username, password)
  }

  handleLoginSubmit = (username, password) => {
    logic.login(username, password)
  }

  render() {
    return <div>
        <Landing/>
        <Login onLoginSubmit={this.handleLoginSubmit}/>
        <Register onRegisterSubmit={this.handleRegisterSubmit}/>
      </div>
  }
}

export default App
