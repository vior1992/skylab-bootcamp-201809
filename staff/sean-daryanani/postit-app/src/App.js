import React, { Component } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import logic from './logic'
import Home from './components/Home'

class App extends Component {
    state = {
        register: false, 
        login: false,
        home: false,
        passVerification: '',
        userID : 0
    }

    handleRegister = () => {
        this.setState({register: !this.state.register,
        passVerification:''})

    }
    
    handleLogin = () => {
        this.setState({login: !this.state.login,
        passVerification:''})
    }

    handleHome = () => {
        this.setState({login: !this.state.home})
    }

    registerSubmit = (name, email, username, password) => {
        logic.createUser(name, email, username, password)

        this.setState({
            login: true,
            register: false
        })
    }

    loginSubmit = (username, password) => {
        const result = logic.validateUser(username, password)
        if (typeof result==='object'){

            const verificationMessage = result[0]
            const userID = result[1]

            this.setState({passVerification: verificationMessage, 
                userID : userID}, console.log(this.state.passVerification, this.state.userID))
        }

        else {
            this.setState({passVerification : result})
        }

        
    }
     
    render() {
        if (this.state.passVerification==='correct password') return <Home propUserID={this.state.userID} />
        return <div>
       
        {!this.state.register && !this.state.login &&             
            <section>
            <h1>Welcome to the Postit App!</h1>
            <button onClick={this.handleRegister}>Register</button>
            <button onClick={this.handleLogin}>Login</button>
            </section>}
        {this.state.register && <Register onRegisterClick={this.registerSubmit} backHandle={this.handleRegister}/>}
        {this.state.login && <Login onLoginClick={this.loginSubmit} backHandle={this.handleLogin} wrongPassword={this.state.passVerification} />} 
        

        </div>
    }

}

export default App

