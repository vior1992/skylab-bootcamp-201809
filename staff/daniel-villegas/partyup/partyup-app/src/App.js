import React, { Component } from 'react'
import { Route, Redirect, withRouter } from 'react-router'
import logic from './logic'
import Landing from './views/landing'
import Register from './views/register'
import Login from './views/login'
import Home from './views/home'
import CreatePartyup from './views/createPartyup'
import Profile from './views/profile'
import PartyupEvent from './views/partyupEvent'

logic.url = 'http://localhost:5000/api'


class App extends Component {
  state = { error: null, partyupId: '' }

  handleRegisterClick = event => {
    event.preventDefault()

    this.props.history.push('/register')

    this.setState({ error: null })
  }

  handleLoginClick = () => {
    this.props.history.push('/login')

    this.setState({ error: null })
  }

  handleLogoClick = event => {
    event.preventDefault()

    this.props.history.push('/home')

    this.setState({ error: null })
  }

  handlePartyupClick = (id) => {
    const partyupId = id 

    this.setState({ partyupId, error: null })

    this.props.history.push(`/partyup/${partyupId}`)  
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

  handleRegister = (name, surname, city, username, password) => {
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

  handleLogin = (username, password) =>  {
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

  handleCreatePartyup = (title, description, date, city, place, tags) => {
    try {
        logic.createPartyup(title, description, date, city, place, tags)
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
          <Route exact path="/" render={() => !logic.loggedIn ? <Landing onRegisterClick={this.handleRegisterClick} onLoginClick={this.handleLoginClick} onLogoClick={this.handleLogoClick} onSearchClick={this.handleLoginClick} onPartyupClick={this.handleLoginClick}/> : <Redirect to="/home" />} />
          <Route path="/home" render={() => logic.loggedIn ? <Home onRegisterClick={this.handleRegisterClick} onLoginClick={this.handleLoginClick} onLogoClick={this.handleLogoClick} onPartyupClick={this.handlePartyupClick} onCreatePartyupClick={this.handleCreatePartyUpClick} onProfileClick={this.handleProfileClick} onLogoutClick={this.handleLogoutClick} /> : <Redirect to="/landing" />} />
          <Route path="/register" render={() => <Register onRegister={this.handleRegister} onRegisterClick={this.handleRegisterClick} onLoginClick={this.handleLoginClick} onLogoClick={this.handleLogoClick}/>}/>
          <Route path="/login" render={() => <Login onLogin={this.handleLogin} onRegisterClick={this.handleRegisterClick} onLoginClick={this.handleLoginClick} onLogoClick={this.handleLogoClick}/>}/>
          <Route path="/create-partyup" render={() => <CreatePartyup onCreateClick={this.handleCreateClick} onCreatePartyup={this.handleCreatePartyup} />}/>
          <Route path="/profile" render={() => <Profile onPartyupClick={this.handlePartyupClick} />}/>
          <Route path="/partyup/:partyupId" render={props => <PartyupEvent partyupId={props.match.params.partyupId}/>}/>
        </div>
  }
}

export default withRouter(App);
