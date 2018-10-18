import React, { Component } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import logic from './logic'
import Home from './components/Home'

class App extends Component {

  state = { register: false, login: false,  userId: null }

  handleRegister = () => {
    this.setState({ register: true })
  }

  handleLogin = () => {
      this.setState({ login: true, register: false })
     
  }

  handleRegisterClick = (name, surname, username, password) => {
      logic.registerUser(name, surname, username, password)
      this.setState({ register: false, login: true })
     
  }

  handleLoginClick = (username, password) => {
    
      try{
        const userId = logic.loginUser(username, password)
        this.setState({userId, login: false})
      }catch(err) {
        console.error(err.message)
      }
        
  }

  render() {
      return  <div className="container">
                {!this.state.register && !this.state.login && !this.state.userId && <section>
                  <button onClick={this.handleRegister}>Register</button> 
                or <button onClick={this.handleLogin}>Login</button>
                </section>}
                {this.state.register && <Register onRegisterClick={this.handleRegisterClick} />}
                {this.state.login && <Login onLoginClick={this.handleLoginClick}/>}
                {this.state.userId && <Home/>}
                {/* TODO show Home on successful login */}
              </div>
      
      
         
  }
}

export default App;




