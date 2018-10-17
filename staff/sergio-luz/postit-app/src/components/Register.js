import React, { Component } from 'react'
import logic from '../logic'

///////////////////////////
// class User {
//     constructor(name, surname, username, password) {
//         this.name = name
//         this.surname = surname
//         this.username = username
//         this.password =password
//         this.id = Date.now()
//     }
////////////////////////////////////////

class Register extends Component {

    state = { _Users: [], _name: '', _surname: '', _username: '', _password: '' }

    constructor() {
        super()
        let users = logic.listUsers()

        console.log(users)
        if (users === null) {
            { users = [] }
            logic.persistUsers(users)
        }
    }

    handleSubmit = this.handleSubmit.bind(this)
    handleSubmit(event) {
        event.preventDefault()
        console.log('entra\n=>', this.state._name, this.state._surname, this.state._username, this.state._password)
        logic.createUser(this.state._name, this.state._surname, this.state._username, this.state._password)

        //this.setState({ texts: logic.listPostits() })
    }

    handleInput_Name = event => {
        console.log('esta cambiando el name')

        const _name = event.target.value

        this.setState({ _name })
    }

    handleInput_Surname = event => {
        console.log('esta cambiando el surname')

        const _surname = event.target.value

        this.setState({ _surname })
    }

    handleInput_Username = event => {
        console.log('esta cambiando el username')

        const _username = event.target.value

        this.setState({ _username })
    }

    handleInput_Password = event => {
        console.log('esta cambiando el password')

        const _password = event.target.value

        this.setState({ _password })
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleInput_Name} value={this.state.name}></input>

            <input onChange={this.handleInput_Surname}></input>

            <input onChange={this.handleInput_Username}></input>

            <input onChange={this.handleInput_Password}></input>

            <button type='submit' />
        </form>
    }
}

export default Register