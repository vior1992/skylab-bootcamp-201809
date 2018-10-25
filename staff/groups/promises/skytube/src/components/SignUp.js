import React, { Component } from 'react'
import Error from './Error'

class SignUp extends Component {
    state = { name: '', surname: '', username: '', email:'', password: '', repPassword: '', wrongRepPas: false}

    handleNameChange = event => {
        const name = event.target.value

        this.setState({name})
    }

    handleSurnameChange = event => {
        const surname = event.target.value

        this.setState({surname})
    }

    handleUsernameChange = event => {
        const username = event.target.value

        this.setState({username})
    }

    handleEmailChange = event => {
        const email = event.target.value

        this.setState({email})
    }

    handlePasswordChange = event => {
        const password = event.target.value

        this.setState({password})
    }

    handleRepPasswordChange = event => {
        const repPassword = event.target.value

        this.setState({repPassword})
    }

    handleSubmit = event =>{
        event.preventDefault()

        const {name, surname, username, email, password, repPassword} = this.state

        if (password === repPassword) {

            this.props.onSubmit(name, surname, username, email, password)
            this.setState({ wrongRepPas: false})

        } else {  //TODO shall we put this in the logic??
            this.setState({ wrongRepPas: true})
        }
    }

    render() {
        return <div className='signup'>
            <Error error={this.props.error}/>
            <form className='signup__formulary' onSubmit={this.handleSubmit}>
                <h4>Name</h4>
                <input className='signup__input' placeholder='Introduce your name' onChange={this.handleNameChange}/>
                <h4>Surname</h4>
                <input className='signup__input' placeholder='And your surname' onChange={this.handleSurnameChange}/>
                <h4>Username</h4>
                <input className='signup__input' placeholder='Pick a cool username' onChange={this.handleUsernameChange}/>
                <h4>Email</h4>
                <input className='signup__input' type='email' placeholder='notfalse@xmple.com' onChange={this.handleEmailChange}/>
                <h4>Password</h4>
                <input className='signup__input' type='password' placeholder='Create a secure password' onChange={this.handlePasswordChange}/>
                <h4>Repeat Password</h4>
                <input className='signup__input' type='password' placeholder='And repeat it' onChange={this.handleRepPasswordChange}/>
                {this.state.wrongRepPas && <p>Passwords are not the same</p>}
                <button className='signup__button'type='submit'>Sign Up</button>
            </form>
        </div>
    }
}

export default SignUp
