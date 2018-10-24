import React, { Component } from 'react'
import { Route, withRouter, Redirect, Link } from 'react-router-dom'
import Header from './components/Header'
import LogIn from './components/LogIn'
import Sidenav from './components/Sidenav'
import Search from './components/Search'
import Profile from './components/Profile'
import VideoList from './components/VideoList'
import Player from './components/Player'
import logic from './logic'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            auth_info: logic.authInfo(),
            video_list: logic.video_search,
            video: logic.current_video,
            most_popular: [],
            history: logic.getHistory
        }
    }

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
                        auth_info: info
                    })
                })
                .then(()=> logic.getMostPopular())
                .then(res => this.setState({most_popular: res}))
                .catch(error => console.error(error))
                .then(()=> logic.getHistory())
                .then(history=> this.setState({history}))
                .catch(error => console.error(error))
		} catch (err) {
			this.setState({error: err.message})
		}
	}

	handleLogOut = () => {
		logic.logoutUser()

		this.setState({error: null})
    }

	handleSearch = query => {
		logic.search(query)
			.then(result => this.setState({video_list: result}, () => this.props.history.push('/home/search')))
            .catch(error => console.error(error))
	}

	handleVideoClick = video_id => {
		logic.retrieveSong(video_id)
			.then(result => this.setState({video: result}, () => this.props.history.push('/home/player')))
            .catch(error => console.error(error))
    }

    handleNewFavourite = video_id => {
        logic.addFavourite(video_id)
        this.setState({auth_info: logic.authInfo()})
    }

    handleNewWatchLater = video_id => {
        logic.addWatchLater(video_id)
        this.setState({auth_info: logic.authInfo()})
    }

    handleNewPlaylist = title => {
        logic.addPlaylist(title)
        this.setState({auth_info: logic.authInfo()})
    }

    handleClickFavourites = () => {
        const favourites = logic.getFavourites()
        console.log(favourites);
    }

    handleClickWatchLater = () => {
        const watch_later = logic.getWatchLater()
        console.log(watch_later);
    }

    handleClickHistory = () =>{
        const history = logic.getHistory()
        console.log(history)
    }

    renderLanding() {
        return <div className="landing">
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
        return <div className="home">
            <Sidenav onClickFavourites={this.handleClickFavourites} onClickHistory={this.handleClickHistory} onClickWatchLater={this.handleClickWatchLater} playlists={this.state.auth_info.playlists} />
            <Search onSearch={this.handleSearch}/>
            <Profile onLogOut={this.handleLogOut} user={{username:this.state.auth_info.username, name:this.state.auth_info.name+' '+this.state.auth_info.surname, email:this.state.auth_info.email}}/>
            <main className = 'main'>
                <Route exact path='/home' render={() => <VideoList onVideoClick={this.handleVideoClick}  videoList={this.state.most_popular} />} />
                <Route path='/home' render={() => <VideoList onVideoClick={this.handleVideoClick}  videoList={this.state.historial} />} />
                <Route path='/home/search' render={() => <VideoList onVideoClick={this.handleVideoClick} videoList={this.state.video_list} />} />
                <Route path='/home/player' render={() => <Player video={this.state.video} playlists={this.state.auth_info.playlists} onNewFavourite={this.handleNewFavourite} onNewWatchLater={this.handleNewWatchLater} onNewPlaylist={this.handleNewPlaylist} />} />
            </main>
        </div>
	}

    render() {
        return <div>
            <Route exact path='/' render={() => !logic.isAuthenticated() ? this.renderLanding() : <Redirect to='/home'/>} />
            <Route path='/home' render={() => logic.isAuthenticated() ? this.renderHome() : <Redirect to='/login' />} />
            <Route path='/login' render={() => !logic.isAuthenticated() ? <LogIn onLogInSubmit={this.handleLogIn}/> : <Redirect to='/home' />} />
            {this.state.error && <p>{this.state.error}</p>}
        </div>
    }
}

export default withRouter(App);
