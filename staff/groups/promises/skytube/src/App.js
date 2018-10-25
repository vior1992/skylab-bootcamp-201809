import React, { Component } from 'react'
import { Route, withRouter, Redirect, Link } from 'react-router-dom'
import Header from './components/Header'
import LogIn from './components/LogIn'
import Sidenav from './components/Sidenav'
import Search from './components/Search'
import Profile from './components/Profile'
import VideoList from './components/VideoList'
import Player from './components/Player'
import Playlist from './components/Playlist'
import logic from './logic'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            registerError: null,
            loginError: null,
            auth_info: logic.authInfo(),
            videoList: logic.video_search,
            video: logic.current_video,
            mostPopular: [],
            history: logic.getHistory
        }
    }

    handleRegister = (name, surname, username, email, password) => {
		try {
			logic.registerUser(name, surname, username, email, password)
				.then(() => {
                    this.setState({registerError: null})
                    this.props.history.push('/login')
                })
				.catch((err) => {this.setState({registerError: err.message})})
		} catch (err) {
			this.setState({registerError: err.message})
		}
	}

	handleLogIn = (username, password) => {
		try {
			logic.loginUser(username, password)
				.then(info => {
                    this.setState({
                        loginError: null,
                        auth_info: info
                    })
                })
                .catch(() => {this.setState({loginError: "Incorrect username or password"})})
                .then(()=> logic.getMostPopular())
                .then(res => this.setState({mostPopular: res}))
                .catch(error => console.error(error))
                .then(()=> logic.getHistory())
                .then(history=> this.setState({history}))
                .catch(error => console.error(error))
		} catch (err) {
            this.setState({loginError: err.message})
		}
	}

	handleLogOut = () => {
		logic.logoutUser()

		this.setState({error: null})
    }

	handleSearch = query => {
		try {logic.search(query)
			    .then(result => this.setState({videoList: result}, () => this.props.history.push('/home/search')))
                .catch(error => console.error(error))
        } catch(err) {
            this.setState({error: err.message})
            console.error(this.state.error)
        }
	}

	handleVideoClick = video => {
		logic.getVideo(video)
			.then(result => this.setState({video: result}, () => this.props.history.push('/home/player')))
            .catch(error => console.error(error))
    }

    handleNewFavourite = video => {
        logic.addFavourite(video)
        this.setState({auth_info: logic.authInfo()})
    }

    handleNewWatchLater = video => {
        logic.addWatchLater(video)
        this.setState({auth_info: logic.authInfo()})
    }

    handleNewPlaylist = title => {
        logic.addPlaylist(title)
        this.setState({auth_info: logic.authInfo()})
    }

    handleAddToPlaylist = (video, playlist_id) => {
        logic.addVideoToPlaylist(video, playlist_id)
        this.setState({auth_info: logic.authInfo()})
    }

    handleRemoveFromPlaylist = (video_id, playlist_id) => {
        logic.removeVideoFromPlaylist(video_id, playlist_id)
        this.setState({auth_info: logic.authInfo()})
    }

    handleClickHome = () => {
        this.props.history.push('/home')
        logic.getMostPopular()
            .then(res => this.setState({mostPopular: res}))
            .catch(error => console.error(error))
            .then(()=> logic.getHistory())
            .then(history=> this.setState({history}))
            .catch(error => console.error(error))
    }

    handleClickFavourites = () => {
        this.props.history.push('/home/favourites')
    }

    handleClickHistory = () =>{
        this.props.history.push('/home/history')
    }

    handleClickWatchLater = () => {
        this.props.history.push('/home/watch_later')
    }

    handleClickPlaylist = playlist_id => {
        this.props.history.push('/home/playlist/' + playlist_id)
    }

    renderLanding() {
        return <div className="landing">
            <nav className="landing__items">
                <div className="landing__left">
                    <img className="landing__logo" src="/img/skytube.logo.png" alt="logo"></img>
                    <h1>Skytube</h1>
                </div>
                <ul className="landing__right">
                    <li><Link className="landing__button" to='/#register'>Sign Up</Link></li>
                    <p className="landing__button--separator">or</p>
                    <li><Link className="landing__button" to='/login'>Log In</Link></li>
                </ul>
            </nav>
            <Header error={this.state.registerError} onSubmitSignUp={this.handleRegister} />
        </div>
    }

    renderHome() {
        return <div className="home">
            <Sidenav onClickHome={this.handleClickHome} onClickFavourites={this.handleClickFavourites} onClickHistory={this.handleClickHistory} onClickWatchLater={this.handleClickWatchLater} onClickPlaylist={this.handleClickPlaylist} playlists={this.state.auth_info.playlists} />
            <Search onSearch={this.handleSearch}/>
            <Profile onLogOut={this.handleLogOut} user={{username:this.state.auth_info.username, name:this.state.auth_info.name+' '+this.state.auth_info.surname, email:this.state.auth_info.email}}/>
            <main className = 'main'>
                <Route exact path='/home' render={() => <VideoList title ={'Most Popular'} onVideoClick={this.handleVideoClick}  videoList={this.state.mostPopular} />} />
                <Route exact path='/home' render={() => <VideoList title ={'History'} onVideoClick={this.handleVideoClick}  videoList={this.state.history} />} />
                <Route path='/home/search' render={() => <VideoList onVideoClick={this.handleVideoClick} videoList={this.state.videoList} />} />
                <Route path='/home/player' render={() => <Player video={this.state.video} playlists={this.state.auth_info.playlists} onNewFavourite={this.handleNewFavourite} onNewWatchLater={this.handleNewWatchLater} onNewPlaylist={this.handleNewPlaylist} onAddToPlaylist={this.handleAddToPlaylist} onRemoveFromPlaylist={this.handleRemoveFromPlaylist} />} />
                <Route path='/home/favourites' render={props => <Playlist onVideoClick={this.handleVideoClick} playlist={logic.getFavourites()} />} />
                <Route path='/home/history' render={props => <Playlist onVideoClick={this.handleVideoClick} playlist={logic.getHistory()} />} />
                <Route path='/home/watch_later' render={props => <Playlist onVideoClick={this.handleVideoClick} playlist={logic.getWatchLater()} />} />
                <Route path='/home/playlist/:id' render={props => <Playlist onVideoClick={this.handleVideoClick} playlist={logic.getPlaylist(props.match.params.id)} />} />
            </main>
        </div>
	}

    render() {
        return <div>
            <Route exact path='/' render={() => !logic.isAuthenticated() ? this.renderLanding() : <Redirect to='/home'/>} />
            <Route path='/home' render={() => logic.isAuthenticated() ? this.renderHome() : <Redirect to='/login' />} />
            <Route path='/login' render={() => !logic.isAuthenticated() ? <LogIn error={this.state.loginError} onLogInSubmit={this.handleLogIn}/> : <Redirect to='/home' />} />
        </div>
    }
}

export default withRouter(App);
