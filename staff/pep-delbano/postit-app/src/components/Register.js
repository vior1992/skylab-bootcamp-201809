import React, { Component } from 'react'

class Register extends Component {  //it only renders a form and save in the state the user's inputs
    state = { name: '', surname: '', username: '', password: '' }

    handleNameChange = event => {
        const name = event.target.value

        this.setState({ name })
    }

    handleSurnameChange = event => {
        const surname = event.target.value

        this.setState({ surname })
    }

    handleUsernameChange = event => {
        const username = event.target.value

        this.setState({ username })
    }

    handlePasswordChange = event => {
        const password = event.target.value

        this.setState({ password })
    }

    handleSubmit = event => {
        event.preventDefault()

        const { name, surname, username, password } = this.state

        this.props.onRegisterClick(name, surname, username, password)
    }

    render() {
        return <div className= "register-form">
            <form className="form-signin" onSubmit={this.handleSubmit}>
                <input className='register' type="text" placeholder="Name" onChange={this.handleNameChange} />
                <input className='register' type="text" placeholder="Surname" onChange={this.handleSurnameChange} />
                <input className='register' type="text" placeholder="Username" onChange={this.handleUsernameChange} />
                <input className='register' type="password" placeholder="Password" onChange={this.handlePasswordChange} />
                <button className='register btn btn-md btn-primary' type="submit">Register</button>
            </form>
        </div>
    }
}

export default Register