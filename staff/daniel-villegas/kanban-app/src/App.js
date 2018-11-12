import React, { Component } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Postits from './components/Postits'
import Error from './components/Error'
import Landing from './components/Landing'
import logic from './logic'
import { Route, withRouter, Redirect } from 'react-router-dom'

logic.url = 'http://localhost:5000/api'

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

    handleRegister = (name, surname, username, password) => {
        try {
            logic.registerUser(name, surname, username, password)
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
                .then(() =>  {
                    this.props.history.push('/postits')

                    this.setState({ error: null })
                })
                .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    handleLogoutClick = () => {
        logic.logout()

        this.props.history.push('/')

        this.setState({ error: null })
    }

    handleGoBack = () => {
        this.props.history.push('/')
        
        this.setState({ error: null })
    }

    render() {
        const { error } = this.state

        return <div>
            <Route exact path="/" render={() => !logic.loggedIn ? <Landing onRegisterClick={this.handleRegisterClick} onLoginClick={this.handleLoginClick} /> : <Redirect to="/postits" />} />
            <Route path="/register" render={() => !logic.loggedIn ? <Register onRegister={this.handleRegister} onGoBack={this.handleGoBack} /> : <Redirect to="/postits" />} />
            <Route path="/login" render={() => !logic.loggedIn ? <Login onLogin={this.handleLogin} onGoBack={this.handleGoBack} /> : <Redirect to="/postits" />} />
            {error && <Error message={error} />}

            <Route path="/postits" render={() => logic.loggedIn ? <div>
                <div className="postits">
                    <section><button className="logout__button" onClick={this.handleLogoutClick}>Logout</button></section>
                    <Postits />
                </div>
            </div> : <Redirect to="/" />} />

        </div>
    }
}

export default withRouter(App)
