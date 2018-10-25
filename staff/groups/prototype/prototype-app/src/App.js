import React, { Component } from 'react'
import { Route, withRouter, Redirect } from 'react-router-dom'
import MovieDetail from './components/MovieDetail'
import ListedMovies from './components/ListedMovies'
import logic from './logic'
import UserMovies from './components/UserMovies'
// import UserData from './components/UserData'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SignIn from './components/SignIn'
import LogIn from './components/LogIn'
import Home from './components/Home'

class App extends Component {

  state = {}

  render() {
    return <div>
      <Route path="/" render={() => <Navbar />} />
      <Route exact path="/" render={() => <Home />} />
      <Route path="/signin" render={() => <SignIn />} />
      <Route path="/login" render={() => <LogIn />} />
      <Route path='/movie/:id' render={(props) => <MovieDetail id={props.match.params.id} /> } />
      {/* <Route exact path="/user" render={() => logic.loggedIn ?<UserData/> : <Redirect to="/home" />} /> */}
      <Route exact path="/user" render={() => logic.loggedIn ?<UserMovies/> : <Redirect to="/" />} />
      <Route path='/movies/:kind' render={(props) => <ListedMovies kind={props.match.params.kind} /> } />
      <Route path='/search/:kind' render={(props) => <ListedMovies kind={props.match.params.kind} /> } />
      <Route path="/" render={() => <Footer />} />
      {/* <NotFound /> */}
    </div>
  }
}

export default withRouter(App)
