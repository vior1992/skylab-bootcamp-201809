import React, { Component } from 'react'
import SignUp from './SignUp'

function Header(props) {
    return <header className="App-header">
        <div>
            <h1>Hola SoundSky</h1>
        </div>
        <SignUp onSubmit={props.onSubmitSignUp}/>
    </header>
}

export default Header
