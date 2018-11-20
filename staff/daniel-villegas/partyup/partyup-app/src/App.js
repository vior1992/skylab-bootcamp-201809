import React, { Component } from 'react'
import { Route, Redirect, withRouter } from 'react-router'
import logic from './logic'
import Landing from './views/landing'
import Home from './views/home'
import Register from './views/register'
import Login from './views/login'
import CreatePartyup from './views/createPartyup'
import Profile from './views/profile'

logic.url = 'http://localhost:5000/api'


class App extends Component {
  state = { error: null }

  handleRegisterClick = event => {
    event.preventDefault()

    this.props.history.push('/register')

    this.setState({ error: null })
  }

  handleLoginClick = event => {
    event.preventDefault()

    this.props.history.push('/login')

    this.setState({ error: null })
  }

  handleLogoClick = event => {
    event.preventDefault()

    this.props.history.push('/home')

    this.setState({ error: null })
  }

  handleSearchClick = event => {
    alert("search page")
    //event.preventDefault()

    // this.props.history.push('/search-partyups')

    // this.setState({ error: null })
  }

  handlePartyupClick = event => {
    alert("partyup page")
    //event.preventDefault()

    // this.props.history.push('/partyup')

    // this.setState({ error: null })
  }

  handleCreatePartyUpClick = event => {
    event.preventDefault()

    this.props.history.push('/create-partyup')

    this.setState({ error: null })
  }

  handleProfileClick = event => {
    event.preventDefault()

    this.props.history.push('/profile')

    this.setState({ error: null })
  }

  handleLogoutClick = event => {
    event.preventDefault()

    logic.logout()

    this.props.history.push('/landing')

    this.setState({ error: null })
  }

  handleRegister = ( name, surname, city, username, password ) => {
    try {
      logic.registerUser(name, surname, city, username, password)
            .then(() => {
                this.setState({ error: null }, () => this.props.history.push('/login'))
            })
            .catch(err => this.setState({ error: err.message }))
           
    } catch (err) {
        this.setState({ error: err.message })
    }
  }

  handleLogin = ( username, password ) =>  {
    try {
        logic.authenticateUser(username, password)
            .then(() => {
                this.setState({ error: null }, () => this.props.history.push('/home'))
            })
            .catch(err => this.setState({ error: err.message }))

    } catch (err) {
        this.setState({ error: err.message })
    }
  }

  render() {
        const { error } = this.state

        return <div>
          <Route exact path="/landing" render={() => !logic.loggedIn ? <Landing onRegisterClick={this.handleRegisterClick} onLoginClick={this.handleLoginClick} onLogoClick={this.handleLogoClick} onSearchClick={this.handleSearchClick} onPartyUpClick={this.handlePartyupClick}/> : <Redirect to="/home" />} />
          <Route path="/home" render={() => logic.loggedIn ? <Home onRegisterClick={this.handleRegisterClick} onLoginClick={this.handleLoginClick} onLogoClick={this.handleLogoClick} onSearchClick={this.handleSearchClick} onPartyupClick={this.handlePartyupClick} onCreatePartyupClick={this.handleCreatePartyUpClick} onProfileClick={this.handleProfileClick} onLogoutClick={this.handleLogoutClick} /> : <Redirect to="/landing" />} />
          <Route path="/register" render={() => <Register onRegister={this.handleRegister} onRegisterClick={this.handleRegisterClick} onLoginClick={this.handleLoginClick} onLogoClick={this.handleLogoClick}/>}/>
          <Route path="/login" render={() => <Login onLogin={this.handleLogin} onRegisterClick={this.handleRegisterClick} onLoginClick={this.handleLoginClick} onLogoClick={this.handleLogoClick}/>}/>
          <Route path="/create-partyup" render={() => <CreatePartyup />}/>
          <Route path="/profile" render={() => <Profile />}/>
          {/* 
          
        
          <Route path="/partyup" />
          <Route path="/search-partyups" /> */}
        </div>
  }
}

export default withRouter(App);
