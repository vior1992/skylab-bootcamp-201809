import React from 'react'
import SignUp from './SignUp'

function Header(props) {
    return <header className="header">
        <SignUp error={props.error} onSubmit={props.onSubmitSignUp}/>
    </header>
}

export default Header
