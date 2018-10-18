import React, { Component } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import logic from './logic'
import Home from './components/Home'
import Error from './components/Error'


class App extends Component {

  state = { register: false, login: false,  userId:this.getUserId() }


  getUserId() {
    const userId = sessionStorage.setItem('userId')
      return userId ? parseInt(userId) : null
  }

  handleRegister = () => {
    this.setState({ register: true, error: null })
  }

  handleLogin = () => {
      this.setState({ login: true, register: false, error: null })
     
  }

  handleRegisterClick = (name, surname, username, password) => {
    try {
      logic.registerUser(name, surname, username, password)

      this.setState({ login: true, register: false })
  } catch (err) {
     this.setState({error: err.message})
  }
     
  }

  handleLoginClick = (username, password) => {
    
      try{
        const userId = logic.loginUser(username, password)
        this.setState({userId, login: false})
        sessionStorage.setItem('userId', userId)
      }catch(err) {
        this.setState({error: err.message})
      }
        
  }

  render() {

      const { register, login, userId, error } = this.state

      return  <div className="container">
                {!register && !login && !userId && <section>
                  <button onClick={this.handleRegister}>Register</button> 
                or <button onClick={this.handleLogin}>Login</button>
                </section>}
                {this.state.register && <Register onRegisterClick={this.handleRegisterClick} />}
                {this.state.login && <Login onLoginClick={this.handleLoginClick}/>}
                {this.state.userId && <Home userId={userId}/>}
                {error && <Error message={error}/>}
              </div>
      
      
         
  }
}

export default App;




