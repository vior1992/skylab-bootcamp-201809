import React from 'react'
import SignUp from './SignUp'

function Header(props) {
    return <header className="app-header">
        <div className="container">
            <img className="header__logo" src="/img/skytube.logo.png" alt="logo"></img>
            <h1 className="header__title">Skytube</h1>
        </div>
        <SignUp onSubmit={props.onSubmitSignUp}/>
    </header>
}

export default Header
