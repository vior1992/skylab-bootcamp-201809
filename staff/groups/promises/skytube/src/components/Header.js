import React from 'react'
import SignUp from './SignUp'

function Header(props) {
    return <header>
        <div>
            <SignUp onSubmit={props.onSubmitSignUp}/>
        </div>
    </header>
}

export default Header
