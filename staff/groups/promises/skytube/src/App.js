import React, { Component } from 'react';
import './App.css';
import SignUp from './components/SignUp'
import logic from './logic'
import Main from './components/Main'
import LogIn from './components/LogIn'
import { Route, withRouter, Redirect } from 'react-router-dom'
import Landing from './components/Landing';

class App extends Component {
    state = {  error: null }

    handleSignUpSubmit = (name, surname, username, email, password) => {
		try {
			logic.registerUser(name, surname, username, email, password)
				.then(() => {
					this.setState({ error: null}, () => this.props.history.push('/main'))

				})
				.catch(err => this.setState({ error: err.message }))
		
		} catch (err) { 
			this.setState({error: err.message })

		}

	}
	

	handleLogInSubmit = (username, password) => {
		try {
			logic.LogInUser(username, password)
				.then(() => {
					this.setState({ error: null }, () => this.props.history.push('/main'))
				})
				.catch(err => this.setState({ error: err.message}))

		} catch (err) {
			this.setState({error: err.message})
		}
	}

	handleLogInButton = () => {
		this.setState({error: null},  () => this.props.history.push('/login'))
	} 

	handleSignUpButton = () => {
		this.setState({error: null}, () => this.props.history.push('/signup'))

	}

	handleOnLogOut = () => {
		logic.userLogOut()
		
		this.setState({error: null}, () => this.props.history.push('/'))
	}

    render() {

        return (

            <div className="App">
                <header className="App-header">
                    <h1>Hola SoundSky</h1>
					<Route exact path='/' render={() => !logic.loggedIn() ? <Landing onSignUpSubmit={this.handleSignUpSubmit} onClickLogInButton={this.handleLogInButton} onClickSignUpButton={this.handleSignUpButton}/> : <Redirect to='/main'/>}/>
                    <Route path='/signup' render={() => !logic.loggedIn() ? <SignUp onSignUpSubmit={this.handleSignUpSubmit}/>: <Redirect to='/main'/>}/>
					<Route path='/login' render={() => !logic.loggedIn() ? <LogIn onLogInSubmit={this.handleLogInSubmit}/>: <Redirect to='/main'/>}/>
					{this.state.error && <p>{this.state.error}</p>}

					<Route path='/main' render={() => logic.loggedIn() ? <Main onLogOut={this.handleOnLogOut} />: <Redirect to='/login'/>}/>
				
				</header>
            </div>
        );
      }
}

export default withRouter(App);
