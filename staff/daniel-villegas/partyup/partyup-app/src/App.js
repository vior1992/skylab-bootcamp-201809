import React, { Component } from 'react'
import { Route, Redirect, withRouter } from 'react-router'
import logic from './logic'
import Landing from './Components/Landing/landing'
import Register from './Components/Register/register'
import Login from './Components/Login/login'
import Home from './Components/Home/home'
import CreatePartyup from './Components/CreatePartyup/createPartyup'
import Profile from './Components/Profile/profile'
import PartyupEvent from './Components/PartyupEvent/partyupEvent'

logic.url = 'http://localhost:5000/api'


class App extends Component {
  state = { error: null, partyupId: '' , _actuallUserId: ''}

  handleRegisterClick = event => {
    event.preventDefault()

    this.props.history.push('/register')

    this.setState({ error: null })
  }

  handleLoginClick = () => {
    this.props.history.push('/login')

    this.setState({ error: null })
  }

  handleDeletePostClick = () => {    
    this.props.history.push('/home')

    this.setState({ error: null })
  }

  handleDeleteUserClick = () => {  
    // logic.logout()

    this.props.history.push('/')

    this.setState({ error: null })
  }

  handleLogoClick = event => {
    event.preventDefault()

    this.props.history.push('/home')

    this.setState({ error: null })
  }

  handlePartyupClick = (id, actuallUserId) => {
    const partyupId = id

    const _actuallUserId = actuallUserId

    this.setState({ partyupId, _actuallUserId, error: null })

    this.props.history.push(`/user/${_actuallUserId}/partyup/${partyupId}`)  
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

    this.props.history.push('/')

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
        return <div>
          <Route exact path="/" render={() => !logic.loggedIn ? <Landing onRegisterClick={this.handleRegisterClick} onLoginClick={this.handleLoginClick} onLogoClick={this.handleLogoClick} onSearchClick={this.handleLoginClick} onPartyupClick={this.handleLoginClick}/> : <Redirect to="/home" />} />
          <Route path="/home" render={() => logic.loggedIn ? <Home onRegisterClick={this.handleRegisterClick} onLoginClick={this.handleLoginClick} onLogoClick={this.handleLogoClick} onPartyupClick={this.handlePartyupClick} onCreatePartyupClick={this.handleCreatePartyUpClick} onProfileClick={this.handleProfileClick} onLogoutClick={this.handleLogoutClick} /> : <Redirect to="/" />} />
          <Route path="/register" render={() => !logic.loggedIn ? <Register onRegister={this.handleRegister} onRegisterClick={this.handleRegisterClick} onLoginClick={this.handleLoginClick} onLogoClick={this.handleLogoClick} error={this.state.error}/> : <Redirect to="/home" />} />
          <Route path="/login" render={() => !logic.loggedIn ? <Login onLogin={this.handleLogin} onRegisterClick={this.handleRegisterClick} onLoginClick={this.handleLoginClick} onLogoClick={this.handleLogoClick} error={this.state.error}/> : <Redirect to="/home" />}/>
          <Route path="/create-partyup" render={() => logic.loggedIn ? <CreatePartyup onCreateClick={this.handleCreateClick} onCreatePartyup={this.handleCreatePartyup} onCreatePartyupClick={this.handleCreatePartyUpClick} onProfileClick={this.handleProfileClick} onLogoutClick={this.handleLogoutClick} error={this.state.error}/> : <Redirect to="/" />}/>
          <Route path="/profile" render={() => logic.loggedIn ? <Profile onPartyupClick={this.handlePartyupClick} onCreatePartyupClick={this.handleCreatePartyUpClick} onProfileClick={this.handleProfileClick} onLogoutClick={this.handleLogoutClick} onDeleteClick={this.handleDeleteUserClick}/> : <Redirect to="/" />}/>
          <Route path="/user/:_actuallUserId/partyup/:partyupId" render={props => logic.loggedIn ? <PartyupEvent partyupId={props.match.params.partyupId} actuallUserId={props.match.params._actuallUserId} onDeleteClick={this.handleDeletePostClick} onCreatePartyupClick={this.handleCreatePartyUpClick} onProfileClick={this.handleProfileClick} onLogoutClick={this.handleLogoutClick}/> : <Redirect to="/" />}/>
        </div>
  }
}

export default withRouter(App);
