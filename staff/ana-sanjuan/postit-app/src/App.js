import React, { Component } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import logic from './logic'

class App extends Component {
    state = { register: false, login: false, userId: null}

    handleRegister = () => { 
        this.setState({register: true})
    }

    handleLogin = () => {
        this.setState({login: true})
    }

    handleRegisterClick = (name, surname, username, password) => {
        try {
            logic.registerUser(name, surname, username, password)

            this.setState({register: false, login: true})
        } catch(err) {
            console.error(err.message)
        }  
    }

    handleLoginClick = (username, password) => {
        try {
            const userId = logic.authenticate(username, password)

            this.setState({userId, login: false, register: false})

        } catch(err) {
            console.error(err.message)
        }
    }

    render() {
        const {register, login, userId} = this.state
        return <div> 
            {!register && !login && !userId && <section>
                <button onClick={this.handleRegister} >Register</button>
                <button onClick={this.handleLogin}>Log In</button>
            </section>}
            {register && <Register onRegisterClick = {this.handleRegisterClick}/>}
            {login && <Login onLoginClick = {this.handleLoginClick}/>}
            {userId && <Home userId={userId}/>}
        </div>
    }
}

export default App
