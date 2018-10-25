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
                <input className='signup__input' placeholder='name' onChange={this.handleNameChange}/>
                <input className='signup__input' placeholder='surname' onChange={this.handleSurnameChange}/>
                <input className='signup__input' placeholder='username' onChange={this.handleUsernameChange}/>
                <input className='signup__input' type='email' placeholder='email' onChange={this.handleEmailChange}/>
                <input className='signup__input' type='password' placeholder='password' onChange={this.handlePasswordChange}/>
                <input className='signup__input' type='password' placeholder='repeat password' onChange={this.handleRepPasswordChange}/>
                
                <button className='signup__button'type='submit'>Sign Up</button>
            </form>
        </div>
    }
}

export default SignUp
