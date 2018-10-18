import React, { Component } from 'react';
import Register from './components/Register'
import Login from './components/Login'
import logic from './logic'
import Home from './components/Home'

class App extends Component {
    
    state ={ register: false , login:false, home: false, userId: null }

    handleRegisterClick = () => {
        this.setState({ register: true })
    }

    handleLoginClick = () => {
        this.setState({ login: true })
    }

    handleRegister = (name, surname, username, password) => {
        
        try {
            logic.registerUser(name, surname, username, password)

            this.setState({ login: true, register: false })
        } catch (err) {
            console.error(err.message)
        }
    }
    handleLogin = (username,password) => {
        
            
        try {
            const userId = logic.loginUser(username, password)

            this.setState({ userId, login: false, register: false, home: true })
        } catch (err) {
            console.error(err.message)
        }
    }

    handleLogout = () => {
            this.setState({userId : null , login: false, register:false, home:false})
    }


    render (){

        const {register,login,userId,home} = this.state
        return <section className='App' >
               { !register && !login && !userId && <section><button onClick={this.handleRegisterClick}>Register</button> or <button onClick={this.handleLoginClick}>Login</button></section>}
               {register && <Register onRegister={this.handleRegister} />}
               {login &&  <Login onLogin={this.handleLogin} />}
            {home && <Home userId={userId} onLogout={this.handleLogout} />}
        </section>
    }

}

export default App