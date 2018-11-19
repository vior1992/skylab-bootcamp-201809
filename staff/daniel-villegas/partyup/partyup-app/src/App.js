import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router'
import logo from './logo.svg';


class App extends Component {
    state = { error: null }

    handleRegisterClick = () => {
        this.props.history.push('/register')

        this.setState({ error: null })
    }

    handleLoginClick = () => {
        this.props.history.push('/login')

        this.setState({ error: null })
    }

    handleLogoClick = () => {
      this.props.history.push('/landing')

      this.setState({ error: null })
    }

    handleSeeAllClick = () => {
      this.props.history.push('/search-partyups')

      this.setState({ error: null })
    }

    handlePartyupClick = () => {
      this.props.history.push('/partyup')

      this.setState({ error: null })
    }

    handleCreatePartyUpClick = () => {
      this.props.history.push('/create-partyup')

      this.setState({ error: null })
    }

    handleProfileClick = () => {
      this.props.history.push('/profile')

      this.setState({ error: null })
    }

    handleLogoutClick = () => {
      logic.logout()

      this.props.history.push('/landing')

      this.setState({ error: null })
  }

    render() {
        return <div>
          <Route exact path="/landing" render={() => !logic.loggedIn ? <Landing onRegisterClick={this.handleRegisterClick} onLoginClick={this.handleLoginClick} /> : <Redirect to="/home" />} />/>
          <Route path="/register" />
          <Route path="/login" />
          <Route path="/home" />
          <Route path="/profile" />
          <Route path="/create-partyup" />
          <Route path="/partyup" />
          <Route path="/search-partyups" />
        </div>
      }
}

export default App;
