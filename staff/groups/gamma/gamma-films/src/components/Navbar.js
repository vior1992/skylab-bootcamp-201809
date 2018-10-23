import React, { Component } from 'react'

class Navbar extends Component {


    render() {
        return <nav className="navbar">

            <div className="header_background">
                <div className="navbar_buttons">
                    <div className="button -regular center" onClick={this.props.onLoginClick}>Login</div>
                    <div className="button -regular center" onClick={this.props.onRegisterClick}>Register</div>
                </div>
                <div className="header">
                    <img className="logo" />
                </div>
            </div>

        </nav>
    }

}

export default Navbar