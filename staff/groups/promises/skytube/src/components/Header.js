import React from 'react'
import SignUp from './SignUp'

function Header(props) {
    return <header className="App-header">
        <div className="container">
            <h1>Hola SoundSky</h1>
        </div>
        <SignUp error={props.error} onSubmit={props.onSubmitSignUp}/>
    </header>
}

export default Header
