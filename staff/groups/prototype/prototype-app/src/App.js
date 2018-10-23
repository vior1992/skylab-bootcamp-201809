import React, { Component } from 'react'
import logic from './logic'
import { Route, withRouter, Redirect } from 'react-router-dom'
import MovieDetail from './components/MovieDetail'
import ListedMovies from './components/ListedMovies'
// import UserMovies from './components/UserMovies'
// import UserData from './components/UserData'
// import Footer from './components/Footer'
import Navbar from './components/Navbar'
// import Home from './components/Home'

class App extends Component {

  state = {}

  render() {
    return <div>
      <Route path="/" render={() => <Navbar />} />
      {/* <Route path="/home" render={() => <Home/>} /> */}
      <Route path='/movie/:id' render={(props) => <MovieDetail id={props.match.params.id}/> } />
      {/* <Route exact path="/user" render={() => !logic._user ?<UserData/> : <Redirect to="/home" />} /> */}
      {/* <Route exact path="/user/movies" render={() => !logic._user ?<UserMovies/> : <Redirect to="/home" />} /> */}
      <Route path='/movies/:kind' render={(props) => <ListedMovies kind={props.match.params.kind}/> } />
      <Route path='/search/:kind' render={(props) => <ListedMovies kind={props.match.params.kind}/> } />
      {/* <Route path="/" render={() => <Footer/>} /> */}
      {/* <Route path='/movies/:trending' render={() => <h1>hola</h1> } /> */}
    </div>
  }
}

export default withRouter(App)
