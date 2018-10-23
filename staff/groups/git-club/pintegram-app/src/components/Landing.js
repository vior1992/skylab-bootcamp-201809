import React from 'react'

function Landing(props) {
    return <div className="landing">
        <section className="landing__page">
            <div className="group"><button className="landing__register-button" onClick={props.onRegisterClick}>Register</button> <h2 className="landing__or">or</h2> <button className="landing__register-button--login" onClick={props.onLoginClick}>Login</button></div>
        </section>
    </div>
}

export default Landing