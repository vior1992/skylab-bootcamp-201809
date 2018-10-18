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
        logic.registerUser(name, surname, username, password)
    }
    handleLoginClick = (username,password) => {
        let flag = false
        flag=logic.loginUser(username,password)
        if(flag === true){
            this.setState({login: false})
            this.setState({home: true}) 
            this.setState({register: false})}
            
        else console.log('wrong credentials')
    }


    render (){
        return <section className='App' >
               { !this.state.register && !this.state.login && !this.state.userId && <section><button onClick={this.handleRegister}>Register</button> or <button onClick={this.handleLogin}>Login</button></section>}
               {this.state.register && <Register onRegisterClick={this.handleRegisterClick} />}
               {this.state.login &&  <Login onLoginClick={this.handleLoginClick} />}
            {this.state.home && <Home />}
        </section>
    }

}

export default App