import React, { Component } from 'react'
import logic from '../logic'

class Register extends Component {

    state = {
        name: '',
        surname: '',
        username: '',
        password: '',
        repeatPassword: '',
        error:''
    }
    handleSubmit=this.handleSubmit.bind(this)

    handleNameChange = event => {
        const name = event.target.value
        this.setState({ name })
        console.log(name)
    }


handleSurnameChange = event => {
    const surname = event.target.value
    this.setState({ surname })
    console.log(this.state.surname)
}

handleUserNameChange = event => {
    const username = event.target.value
    this.setState({ username })
    console.log(username)
}

handlePasswordChange = event => {
    const password = event.target.value
    this.setState({ password })
    console.log(password)
}

handleRepeatPasswordChange = event => {
    const repeatPassword = event.target.value
    this.setState({ repeatPassword })
    console.log(repeatPassword)
}

handleSubmit = event => {
    event.preventDefault()
    console.log("hola  "+this.state.surname)
    //const {name, surname, username, password}  = this.state
    console.log("hola2  "+this.state.name+ this.state.surname+ this.state.username+ this.state.password)
    // try {
    //     logic.registUser(name, surname, username, password)
    //         .then(() => {
    //             this.setState({ error: null }, () => this.props.history.push('/login'))
    //         })
    //         .catch(err => this.setState({ error: err.message }))
    // } catch (err) {
    //     this.setState({ error: err.message })
    // } 
    }
        
        
    render() {
        
            
        return <form onSubmit={this.handleSubmit}>
            
            <label>Name</label>
            <input type='text' placeholder="Name" onChange={this.handleNameChange}></input>
            
            <label>Surname</label>
            <input type='text' placeholder="Surname" onChange={this.handleNameChange}></input>
            
            <label>Username</label>
            <input  type='text' placeholder="Username" onChange={this.handleNameChange}></input>

        <label>Password</label>
            <input type='password' placeholder="Password" onChange={this.handleNameChange}></input>

            <label>Repeat password</label>
            <input type='password' placeholder="Repeat password" onChange={this.handleNameChange}></input>

            <button type='submit'>Register</button>

        </form>

    }
}

export default Register