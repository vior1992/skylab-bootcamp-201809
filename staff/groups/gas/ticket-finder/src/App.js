import React, { Component } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Error from './components/Error'
import Landing from './components/Landing'
import Home from './components/Home'
import logic from './logic'
import Profile from './components/Profile'
import Favourites from './components/Favourites'
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

handleLogoutClick = () => {
    logic.logout()

    this.props.history.push('/')
}
/* handleFindEventInfo = (id) => {
    try {
        logic.searchEventInfo(id)
            .then(() => console.log(id))
            .catch(err => this.setState({ error: err.message }))
    } catch (err) {
        this.setState({ error: err.message })
    }
} */
handleGoBack = () => this.props.history.push('/')

  render() {
    
    const { error } = this.state

    return <div>
    <Route exact path="/" render={() => !logic.loggedIn ? <Landing onRegisterClick={this.handleRegisterClick} onLoginClick={this.handleLoginClick} /> : <Redirect to="/home" />} />
    <Route path="/register" render={() => !logic.loggedIn ? <Register onRegister={this.handleRegister} onGoBack={this.handleGoBack} /> : <Redirect to="/home" />} />
    <Route path="/login" render={() => !logic.loggedIn ? <Login onLogin={this.handleLogin} onGoBack={this.handleGoBack} /> : <Redirect to="/home" />} />
    {error && <Error message={error} />}
    {/* <section><button onClick={this.handleLogoutClick}>Logout</button></section> */}
    <Route path="/home" render={() => logic.loggedIn ? <Home onLogout={this.handleLogoutClick}  /> : <Redirect to="/" />} />
    <Route path="/favourites" render={() => logic.loggedIn ? <Favourites/> : <Redirect to="/" />} />
    <Route path="/profile" render={() => logic.loggedIn ? <Profile/> : <Redirect to="/" />} />
    </div>
  }
}

export default withRouter(App);
