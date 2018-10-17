import React, { Component } from 'react'
import logic from './logic'
import InputForm from './components/InputForm'
import Post from './components/Post'
import Login from './components/signinForm'
import Register from './components/register'

class App extends Component {
    state = { register: false, login: false }

    handleSignin = text => {
        logic.createPostit(text)
  
        this.setState({ postits: logic.listPostits() })
    }
  
    handleRegister = () => {
        this.state.register({register: true})
    }

    handleRegisterClick = () =>{

    }
  
  
    render() {
  
  return <div className="landingPage">
            <h1 className="title">Post-It App </h1>
            {!this.state.register && <section><button onClick={this.hundleRegister}>Register</button> or <button onClick={this.hundleRegister}> Register </button></section>}
            {this.state.register && <Register onRegisterClick={this.handleRegisterClick}/>}
            {this.state.login && <Login/>}     
        </div>

    }
  }
  
  export default App
  