import React, { Component } from 'react'
import logic from '../logic'

class Navbar extends Component {

    state = {
        user: {},
        flagUser: false,
        name: ''
    }

    getUser = this.getUser.bind(this)

    getUser() {
        if (this.props.isLoggedIn && this.state.flagUser === false) {

            const temp = ''
            // this.setState({user: logic._user})
            try {
                logic.retrieveUser()
                    .then(res => temp = res)
                    .catch(err => this.setState({ error: err.message }))

            } catch (err) {
                this.setState({ error: err.message })
            }

            this.setState({ user: temp })
            console.log(this.state.user)
            this.setState({ flagUser: true })
            this.showWelcome()
        }
    }

    showWelcome = () => {


        debugger
        const data = this.state.user
        const name = data.name
        this.setState({ user: data, name })
        console.log('name ' + this.state.name)

    }

    render() {
        return <nav className="navbar">

            <div className="header_background">
                {this.state.flagUser && <p>{this.state.name}</p>}
                {!this.props.isLoggedIn && <div className="navbar_buttons">
                    <button type="button" class="btn btn-outline-secondary" onClick={this.props.onLoginClick}>Login</button>
                    <button type="button" class="btn btn-outline-secondary" onClick={this.props.onRegisterClick}>Register</button>
                </div>}
                {this.getUser()}

                <div className="header">
                    <img className="logo" />
                </div>
            </div>

        </nav>
    }

}

export default Navbar