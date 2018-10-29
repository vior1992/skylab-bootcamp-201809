import React, { Component } from 'react'
import SignUp from './SignUp'


class Landing extends Component {
    state= {}
	


    render() {
        return <div>
        <button onClick={this.props.onClickLogInButton}>Log In</button> or 
        <button onClick={this.props.onClickSignUpButton}>Sign Up</button>
        <SignUp onSignUpSubmit={this.props.onSignUpSubmit}/>
        </div>
    }
}

export default Landing 