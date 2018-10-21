import React, { Component } from 'react'
import logic from '../logic'
import { Route, withRouter, Redirect } from 'react-router-dom'

class Navbar extends Component {


    render() {
        return <nav>
            <button onClick={this.props.onLoginClick}>Login</button>

            <button onClick={this.props.onRegisterClick}>Register</button>
        </nav>
    }

}

export default Navbar