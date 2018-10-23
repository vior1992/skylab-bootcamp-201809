import React, { Component } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Home from './components/Home'
import TopRatedSlide from './components/topRatedSlide'
import Profile from './components/Profile'
import logic from './logic'

class App extends Component {
    
    handleLoginClick = () => this.props.history.push('/login')

    handleRegisterClick = () => this.props.history.push('/register')

    

    


    render() {

        return <div className="body">
            <Route exact path="/" render={() => <Navbar onLoginClick={this.handleLoginClick} onRegisterClick={this.handleRegisterClick} />} />

            <Route path="/register" render={() => !logic.loggedIn ? <Register history={this.props.history} /> : <Redirect to="/" />} />

            <Route path="/login" render={() => !logic.loggedIn ? <Login history={this.props.history} /> : <Redirect to="/" />} />

            {/* <Route path="/profile" render={() => !logic.loggedIn ? <Profile /> : <Redirect to="/profile" />} /> */}

             <Home />
            <TopRatedSlide/>
            <TopRatedSlide/>
            <TopRatedSlide/>

        </div>
    }
}

export default withRouter(App)
