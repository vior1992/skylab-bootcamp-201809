import React, { Component } from 'react';
import {User} from './../data'
import logic from './../logic'

class Register extends Component {
    state = { users: logic.listUsers() }

    handleSubmit = (event) => {
        event.preventDefault()

        let name = event.target.name
        let surname = event.target.surname
        let username = event.target.username
        let password = event.target.password

        const user = new User(name, surname, username, password)

        logic.createUser(user)

        this.setState({ users: logic.listUsers() })

    }

    render() {
        return <section>
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Name...' onChange={name}></input>
                <input type='text' placeholder='Surname...' onChange={surname}></input>
                <input type='text' placeholder='Username...' onChange={username}></input>
                <input type='password' placeholder='Password...' onChange={password}></input>
                <button type='submit'>Register</button>
            </form>
        </section >
    }
}

export default Register;