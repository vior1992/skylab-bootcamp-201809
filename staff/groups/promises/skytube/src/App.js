import React, { Component } from 'react';
import { Route, withRouter, Redirect, Link } from 'react-router-dom'
import Header from './components/Header'
import LogIn from './components/LogIn'
import logic from './logic'
import Masthead from './components/Masthead'
import HomeList from './components/HomeList'
import SongPlayer from './components/SongPlayer'

class App extends Component {
    state = { error: null, videoList: [] , video: ''}

    handleSignUpSubmit = (name, surname, username, email, password) => {
		try {
			logic.registerUser(name, surname, username, email, password)
				.then(() => {
					this.setState({ error: null}, () => this.props.history.push('/home'))

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
					this.setState({ error: null }, () => this.props.history.push('/home'))
				})
				.catch(err => this.setState({ error: err.message}))

		} catch (err) {
			this.setState({error: err.message})
		}
	}

	handleLogOut = () => {
		logic.userLogOut()

		this.setState({error: null}, () => this.props.history.push('/login'))
	}

	handleSearch = searchQuery => {
		logic.search(searchQuery)
			.then(res => this.setState({videoList: res}))
			
	}

	handleVideoClick = videoId =>{
		logic.retrieveSong(videoId)
			.then(res => {
				
				console.log(res)
				this.setState({video: res})
				
			})

	}


    renderLanding() {
        return <div>
            <nav>
                <ul>
                    <li><Link to='/#register'>Sign Up</Link></li>
                    <li><Link to='/login'>Log In</Link></li>
                </ul>
            </nav>

            <Header onSubmitSignUp={this.handleSignUpSubmit} />
        </div>
    }

    renderHome() {
        return <div><Masthead onSearch={this.handleSearch} onLogOut={this.handleOnLogOut} />
			
			<HomeList onVideoClick={this.handleVideoClick} videoList={this.state.videoList}/>
			<SongPlayer video={this.state.video}/>
			</div>

    }

    render() {
        return <div className="App">
            <Route exact path='/' render={() => !logic.loggedIn() ? this.renderLanding() : <Redirect to='/home'/>} />
            <Route path='/home' render={() => logic.loggedIn() ? this.renderHome() : <Redirect to='/login' />} />
            <Route path='/login' render={() => !logic.loggedIn() ? <LogIn onLogInSubmit={this.handleLogInSubmit}/> : <Redirect to='/home' />} />
            {this.state.error && <p>{this.state.error}</p>}
        </div>
    }
}

export default withRouter(App);
