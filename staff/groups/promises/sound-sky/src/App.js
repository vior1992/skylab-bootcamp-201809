import React, { Component } from 'react';
import './App.css';
import SignUp from './components/SignUp'
import logic from './logic'
import Main from './components/Main'
import LogIn from './components/LogIn'

class App extends Component {
    state = {  error: null , buttons: true, signUp: true, logIn: false, main: false, userId: ''}

    handleSignUpSubmit = (name, surname, username, email, password) => {
		try {
			logic.registerUser(name, surname, username, email, password)
				.then(() => {
					this.setState({ signUp: false, main: true})

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
					this.setState({signUp: false, logIn: false, main: true})
				})
				.catch(err => this.setState({ error: err.message}))

		} catch (err) {
			this.setState({error: err.message})
		}
	}

	onClickLogInButton = () => {
		this.setState({logIn: true, signUp: false, main: false, buttons: false})
	} 

	onClickSignUpButton = () => {
		this.setState({logIn: false, signUp: true, main: false, buttons: false})

	}

	handleOnLogOut = () => {
		logic.userLogOut()
		
		this.setState({main: false, signUp: true, buttons: true})
	}

    render() {

		const { signUp, logIn, main, buttons } = this.state
        return (

            <div className="App">
                <header className="App-header">
                    <h1>Hola SoundSky</h1>
					{buttons && !logIn && !main &&
					<div>
					<button onClick={this.onClickLogInButton}>Log In</button> or <button onClick={this.onClickSignUpButton}>Sign Up</button>
					</div>}

				<div>
                    {signUp && <SignUp onSigUpSubmit={this.handleSignUpSubmit}/>}
					{logIn && <LogIn onLogInSubmit={this.handleLogInSubmit}/>}
					{main && <Main onLogOut={this.handleOnLogOut} />}
				</div>
				</header>
            </div>
        );
      }
}

export default App;
