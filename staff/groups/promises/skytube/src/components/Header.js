import React from 'react'
import SignUp from './SignUp'

function Header(props) {
    return <header className="App-header">
        <div className="container">
            <h1>Hola SoundSky</h1>
        </div>
        <SignUp onSubmit={props.onSubmitSignUp}/>
    </header>
}

export default Header


{/* <div class="container">
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-6">
      2 of 3 (wider)
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-5">
      2 of 3 (wider)
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div> */}