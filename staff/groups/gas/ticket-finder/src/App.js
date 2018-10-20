import React, { Component } from 'react'
import Register from './components/Register'
import Login from './components/Login'
// import Error from './components/Error'
import Landing from './components/Landing'
import logic from './logic'
import { Route, withRouter, Redirect } from 'react-router-dom'

class App extends Component {

  state = { error: null }

  handleRegisterClick = () => this.props.history.push('/register')

  handleLoginClick = () => this.props.history.push('/login')


  handleRegister = (name, email, username, password) => {
    try {
        logic.registerUser(name, email, username, password)
            .then(() => {
                this.setState({ error: null }, () => this.props.history.push('/login'))
            })
            .catch(err => this.setState({ error: err.message }))
    } catch (err) {
        this.setState({ error: err.message })
    }
}

handleLogin = (username, password) => {
    try {
        logic.login(username, password)
            .then(() =>  this.props.history.push('/home'))
            .catch(err => this.setState({ error: err.message }))
    } catch (err) {
        this.setState({ error: err.message })
    }
}

// handleLogoutClick = () => {
//     logic.logout()

//     this.props.history.push('/')
// }

// handleGoBack = () => this.props.history.push('/')

  render() {
    return <div>
    <Route exact path="/" render={() => !logic.loggedIn ? <Landing onRegisterClick={this.handleRegisterClick} onLoginClick={this.handleLoginClick} /> : <Redirect to="/home" />} />
    <Route path="/register" render={() => !logic.loggedIn ? <Register onRegister={this.handleRegister} onGoBack={this.handleGoBack} /> : <Redirect to="/home" />} />
    <Route path="/login" render={() => !logic.loggedIn ? <Login onLogin={this.handleLogin} onGoBack={this.handleGoBack} /> : <Redirect to="/home" />} />
    {error && <Error message={error} />}
    {/* <section><button onClick={this.handleLogoutClick}>Logout</button></section> */}
    </div>
  }
}

export default withRouter(App);
