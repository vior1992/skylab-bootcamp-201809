import React, { Component } from 'react';
import Register from './components/Register'
import Login from './components/Login'
import logic from './logic'
import Home from './components/Home'

class App extends Component {
    
    state ={ register: false , login:false, home: false, userId: null }

    handleRegister = () => {
        this.setState({ register: true })
    }

    handleLogin = () => {
        this.setState({ login: true })
    }

    handleRegisterClick = (name, surname, username, password) => {
        
        try {
            logic.registerUser(name, surname, username, password)

            this.setState({ login: true, register: false })
        } catch (err) {
            console.error(err.message)
        }
    }
    handleLoginClick = (username,password) => {
        
            
        try {
            const userId = logic.loginUser(username, password)

            this.setState({ userId, login: false, register: false, home: true })
        } catch (err) {
            console.error(err.message)
        }
    }


    render (){

        const {register,login,userId,home} = this.state
        return <section className='App' >
               { !register && !login && !userId && <section><button onClick={this.handleRegister}>Register</button> or <button onClick={this.handleLogin}>Login</button></section>}
               {register && <Register onRegisterClick={this.handleRegisterClick} />}
               {login &&  <Login onLoginClick={this.handleLoginClick} />}
            {home && <Home userId={userId} />}
        </section>
    }

}

export default App