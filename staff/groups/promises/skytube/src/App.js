import React, { Component } from 'react';
import { Route, withRouter, Redirect, Link } from 'react-router-dom'
import Header from './components/Header'
import LogIn from './components/LogIn'
import Masthead from './components/Masthead';
import Sidenav from './components/Sidenav';
import logic from './logic'
import HomeList from './components/HomeList'
import SongPlayer from './components/SongPlayer'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            user_info: logic.user_info
        }
    }
    state = { error: null, videoList: [] , video: ''}

    handleRegister = (name, surname, username, email, password) => {
		try {
			logic.registerUser(name, surname, username, email, password)
				.then(() => {
                    this.setState({error: null})
                    this.props.history.push('/login')
                })
				.catch(error => console.error(error))
		} catch (err) {
			this.setState({error: err.message})
		}
	}

	handleLogIn = (username, password) => {
		try {
			logic.loginUser(username, password)
				.then(info => {
                    this.setState({
                        error: null,
                        user_info: info
                    })
                })
				.catch(error => console.error(error))
		} catch (err) {
			this.setState({error: err.message})
		}
	}

	handleLogOut = () => {
		logic.logoutUser()

		this.setState({error: null})
	}

	handleSearch = searchQuery => {
		logic.search(searchQuery)
			.then(res => this.setState({videoList: res}))
			
	}

	handleVideoClick = videoId =>{
		logic.retrieveSong(videoId)
			.then(res => {
				console.log(res)
				this.setState({video: res}, () => this.props.history.push('/songPlayer'))
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

            <Header onSubmitSignUp={this.handleRegister} />
        </div>
    }

    renderHome() {
        return <div><Masthead onSearch={this.handleSearch} onLogOut={this.handleOnLogOut} />
			<HomeList onVideoClick={this.handleVideoClick} videoList={this.state.videoList}/>
			</div>

	}
	
	renderSongPlayer() {
        return <div><Masthead onSearch={this.handleSearch} onLogOut={this.handleOnLogOut} />
			 <SongPlayer video={this.state.video}/>
			</div>

        return <div>
            <Masthead onLogOut={this.handleLogOut} user={{username:this.state.user_info.username, name:this.state.user_info.name+' '+this.state.user_info.surname, email:this.state.user_info.email}} />
            <Sidenav onClickFavourites={undefined} onClickWatchLater={undefined} playlists={this.state.user_info.playlists} />
        </div>
    }

    render() {
        return <div className="App">
            <Route exact path='/' render={() => !logic.isAuthenticated() ? this.renderLanding() : <Redirect to='/home'/>} />
            <Route path='/home' render={() => logic.isAuthenticated() ? this.renderHome() : <Redirect to='/login' />} />
            <Route path='/login' render={() => !logic.isAuthenticated() ? <LogIn onLogInSubmit={this.handleLogIn}/> : <Redirect to='/home' />} />
            {this.state.error && <p>{this.state.error}</p>}
        </div>
    }
}

export default withRouter(App);
