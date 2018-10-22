import React, { Component } from 'react'

class Navbar extends Component {

    render() {
        return <nav className="navbar">

            <image className="header_background">
                {!this.props.isLoggedIn && <div className="navbar_buttons">
                    <button onClick={this.props.onLoginClick}>Login</button>
                    <button onClick={this.props.onRegisterClick}>Register</button>
                </div>}
                <div className="header">
                    <image className="logo"></image>
                </div>
            </image>

        </nav>
    }

}

export default Navbar