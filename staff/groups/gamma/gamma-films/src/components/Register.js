import React, { Component } from 'react'
import logic from '../logic'
import { Route, withRouter, Redirect } from 'react-router-dom'


class Register extends Component {

    state = {
        name: '',
        surname: '',
        username: '',
        password: '',
        repeatPassword: '',
        error: ''
    }

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

    handleSubmit=this.handleSubmit.bind(this)

    handleSubmit (event){
        event.preventDefault()
        console.log("hola  " + this.state.surname)
        const { name, surname, username, password } = this.state
        console.log("hola2  " + this.state.name + this.state.surname + this.state.username + this.state.password)
        debugger
        try {
            logic.registUser(name, surname, username, password)
                .then(() => this.setState({ error: null }))
                .then(() => this.props.history.push('/login'))
                .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
    }


    render() {


        return <div className="login_component">
            <form className="login_form" onSubmit={this.handleSubmit}>

                <label className="login_back">Name</label>
                <input className="login_input" type='text' placeholder="Name" onChange={this.handleNameChange}></input>

                <label className="login_back">Surname</label>
                <input className="login_input" type='text' placeholder="Surname" onChange={this.handleSurnameChange}></input>

                <label className="login_back">Username</label>
                <input className="login_input" type='text' placeholder="Username" onChange={this.handleUserNameChange}></input>

                <label className="login_back">Password</label>
                <input className="login_input" type='password' placeholder="Password" onChange={this.handlePasswordChange}></input>

                <label className="login_back">Repeat password</label>
                <input className="login_input" type='password' placeholder="Repeat password" onChange={this.handleRepeatPasswordChange}></input>

                <button className="login_btn" type='submit'>Register</button>

            </form>
        </div>

    }
}

export default Register