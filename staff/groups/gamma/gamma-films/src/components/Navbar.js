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


            <div className="header_background">
                {this.props.name && <p>{this.props.name}</p>}
                {this.props.isLoggedIn && <button onClick={this.props.onLogoutClick}>Logout</button>}
                {!this.props.isLoggedIn && <div className="navbar_buttons">
                    <button type="button" className="btn btn-outline-secondary" onClick={this.props.onLoginClick}>Login</button>
                    <button type="button" className="btn btn-outline-secondary" onClick={this.props.onRegisterClick}>Register</button>
                </div>}

                <div className="header">
                    <img onClick={this.props.onLogoClick} className="logo" />
                </div>
            </div>

        </nav>
    }

}

export default Navbar