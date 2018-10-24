import React, { Component } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Home from './components/Home'
import TopRatedSlide from './components/TopRatedSlide'
import Profile from './components/Profile'
import logic from './logic'
import Movie from './components/Movie'
import SearchResults from './components/SearchResults'

class App extends Component {

    state = {
        loggedIn: false,
        user: ''
    }
    componentDidMount = () => this.props.history.push('/')

    handleLoginClick = () => this.props.history.push('/login')

    handleRegisterClick = () => this.props.history.push('/register')

    handleLoggedIn = () => {
        this.setState({ loggedIn: true })
        this.getUser()
    }

    getUser() {
        try {
            logic.retrieveUser()
                .then(user => { this.setState({ user }) })
                .then(() => console.log(this.state.user))
        } catch (err) {
            if (err.message) throw Error(err.message)
        }
    }

    handleLogoutClick = () => {
        this.setState({ loggedIn: false })
        this.setState({ user: '' })
        logic.logout()
        this.props.history.push('/')
    }

    handleLogoClick = () => this.props.history.push('/')

    handleFavourites(id) {
        console.log('llama correctamente ' + id)
        let FavList = logic.listFavourites()
            .then(res=> logic.updateFavourites(res, id) )
            .then(res=> console.log(res))
    }

    render() {

        return <div className="body">
            <Route path="/" render={() => <Navbar onLogoClick={this.handleLogoClick} onLoginClick={this.handleLoginClick} onRegisterClick={this.handleRegisterClick} isLoggedIn={this.state.loggedIn} onLogoutClick={this.handleLogoutClick}/>} />

            <Route path="/register" render={() => !logic.loggedIn ? <Register history={this.props.history} /> : <Redirect to="/home" />} />

            <Route path="/login" render={() => !logic.loggedIn ? <Login history={this.props.history} isLoggedIn={this.handleLoggedIn} /> : <Redirect to="/home" name={this.state.user.name} />} />

            <Route path="/" render={() => <Home isLoggedIn={this.state.loggedIn} handleFavourites={this.handleFavourites} />} />

            {/* <Route path="/profile" render={() => !logic.loggedIn ? <Profile /> : <Redirect to="/profile" />} /> */}

            {/* <Route path="/profile" render={() => !logic.loggedIn ? <Profile /> : <Redirect to="/profile" />} /> */}
            
        </div>
    }
}

export default withRouter(App)
