import React, { Component } from 'react'
import logic from './logic'
import Login from './components/login'
import Register from './components/register'
import Landing from './components/landing';

class App extends Component {
    state = { app: true, register: false, login: false, landing: false, userid: null }

    handleRegister = () => {
        this.setState({ register: true })

    }

    handleLogin = () => {
        this.setState({ login: true })
    }

    handleRegisterClick = (name, surname, username, password) => {
        try {
            logic.registerUser(name, surname, username, password)
            this.setState({ register: false, app: true })
        }
    
       catch (err) {
        //to DO            
       }

    }

    handleLoginClick = (username, password) => {
        try {
            const userid = logic.loginUser(username, password)
            console.log(userid)
            this.setState({ userid, login: false, landing: true })
        }
        catch (err){
            alert("Wrong credentials")
        }
    }

    render() {
        return <div className="landingPage">

            {!this.state.register && !this.state.login && !this.state.landing && <section><h1 className="title">Post-It App </h1><button onClick={this.handleRegister}>Register</button> or <button onClick={this.handleLogin}>Login</button></section>}
            {this.state.register && <Register onRegisterClick={this.handleRegisterClick} />}
            {this.state.login && <Login onLoginClick={this.handleLoginClick} />}
            {this.state.landing && <Landing />}
        </div>
    }
}
export default App