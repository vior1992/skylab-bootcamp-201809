import React from 'react'

function Landing(props) {
    return <section className="landing">
        <button className="register__button" onClick={props.onRegisterClick}>Register</button>
        
        <button className="login__button" onClick={props.onLoginClick}>Login</button>
    </section>
}

export default Landing