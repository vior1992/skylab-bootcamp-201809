import React, { Component } from 'react'

import './App.css'
class App extends Component {

  render() {
    return <div>
      <div className='movie-profile'>
        <img className='backdrop' src='https://dummyimage.com/780x439/b3b1b3/fff.png'></img>
        <div className='movie-profile__card card'>
          <img className='card__poster' src='https://dummyimage.com/342x513/ebceeb/fff.png'></img>
          <div className='card__info'>
            <h3>Title</h3>
            <p>Lorem ipsum......</p>
          </div>
        </div>
      </div>
    </div>
  }
}

export default App
