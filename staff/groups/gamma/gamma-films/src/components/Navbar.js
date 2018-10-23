import React, { Component } from 'react'
import logic from '../logic'

class Navbar extends Component {

    state = {
        user: {},
        flagUser: false,
        name: ''
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.userID !== prevProps.userID) {
          this.fetchData(this.props.userID);
        }
      }


    render() {
        return <nav className="navbar">

            <image className="header_background">
                {this.props.name && <p>{this.props.name}</p>}
                {this.props.isLoggedIn && <button onClick={this.props.onLogoutClick}>Logout</button>}
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