import React, { Component } from 'react'
import Home from './components/Home'
import Landing from './components/Landing'
import Register from './components/Register'
import Login from './components/Login'
import logic from './logic'



class App extends Component {
    state={landing: true, register:false, login:false, home: false, userId: null}

    handleRegisterSubmit = (name, surname, username, password) => {
        try{
            logic.registerUser(name, surname, username, password)
            
            this.setState({register: false, login:true})
        } catch(err){
            console.error(err.message)
        }

    }

    handleLoginClick = login => {
        login && this.setState({login: true, landing: false})
    }

    handleRegisterClick = register => {
        register && this.setState({register: true, landing: false})   
    }

    handleLoginSubmit = (username, password) => {

        try{
            let userId = logic.authenticate(username, password)
            this.setState({login: false, home: true})
            this.setState({userId: userId})
        } catch(err){
            console.error(err.message)
        }
    }

    handleHomeSubmit = () => {

    }

    render() {
        return <section>
            {this.state.landing && <Landing onLoginClick={this.handleLoginClick} onRegisterClick={this.handleRegisterClick}/>}
            {this.state.register && <Register onSubmit={this.handleRegisterSubmit} />}
            {this.state.login && <Login onSubmit={this.handleLoginSubmit}/>}
            {this.state.home && <Home getUserPostit={this.state.user} onSubmit={this.handleHomeSubmit}/>}
        </section >
    }
}

export default App;
