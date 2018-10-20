import React, { Component } from 'react';
import './App.css';
import SignUp from './components/SignUp'
import logic from './logic'

class App extends Component {
    state = { signUp: true, error: null }

    handleFormSubmit = (name, surname, username, email, password) => {
		try {
			logic.registerUser(name, surname, username, email, password)
				.then(() => {
					this.setState({ signUp: false})

				})
				.catch(err => this.setState({ error: err.message }))
		} catch (err) { 
			this.setState({error: err.message })

		}

    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Hola SoundSky</h1>
					{this.state.signUp && 
					<div>
					<button>Log In</button> or <button>Sign Up</button>
					</div>}
                    {this.state.signUp && <SignUp onFormSubmit={this.handleFormSubmit}/>}
                </header>
            </div>
        );
      }
}

export default App;
