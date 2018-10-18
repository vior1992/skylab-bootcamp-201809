import React, { Component } from 'react'
import logic from './logic'
import Menu from './components/Menu'
import Notes from './components/Notes'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'

class App extends Component {

    state = {
        texts:this.getTexts() , userId: this.getUserId(), register: false, login: false, home: false, error: null
    }


    handleSubmit = this.handleSubmit.bind(this)
    handleDelete = this.handleDelete.bind(this)
    handleLogin = this.handleLogin.bind(this)

    // constructor() {
    //     super()
    //     let userId = sessionStorage.getItem('userId')
    //     let users = logic.listUsers()
    //     let texts = logic.listPostits()
    //     texts = texts.filter((item) => item.userId === userId)

    //     if (users === null) {
    //         users = []
    //         logic.persistUsers(users)
    //     }
    //     if (texts === null) {
    //         texts = []
    //     }

    //     this.setState({ texts })
    // }

    getTexts() {
        const texts = JSON.parse(sessionStorage.getItem('postits'))

        return texts ? (texts) : []
    }

    getUserId() {
        const userId = sessionStorage.getItem('userId')

        return userId ? parseInt(userId) : null
    }

    handleSubmit(text) {
        logic.createPostit(text, this.state.userId)
        let texts=logic.listPostits()
        const userId=this.state.userId
        texts = texts.filter((item) => item.userId === userId)

        this.setState({ texts })
    }

    handleDelete(INDEXtoBeDeleted) {
        logic.deletePostit(INDEXtoBeDeleted)

        this.setState({ texts: logic.listPostits() })
    }

    handleEditPost = (id, el) => {
        let element = document.getElementById(id)
        if (element.childNodes[1].disabled === true) {
            element.childNodes[1].disabled = false
            logic.modifyPostit(id)
            this.setState({ texts: logic.listPostits() })
        }
        else {
            element.childNodes[1].disabled = true
        }
    }

    OnHanldeRegister = () => {
        this.setState({ register: true })
    }

    OnHandleLogin = () => {
        this.setState({ login: true })
    }

    OnHandleHome = () => {
        this.setState({ home: true })
    }

    handleRegister(_name, _surname, _username, _password) {

        logic.createUser(_name, _surname, _username, _password)
    }

    handleLogin(_username, _password) {
        try {
            const userId = logic.checkLogin(_username, _password)
            let texts = logic.listPostits()
            texts = texts.filter((item) => item.userId === userId)

            this.setState({ texts, userId, login: false, register: false, home: true })

            sessionStorage.setItem('userId', userId)
        } catch (err) {
            console.error(err.message)
        }
    }

    handleLogoutClick = () => {
        this.setState({ userId: null, userId: '', register: false, login: false, home: false })
    }

    activateUser() {
        const texts = logic.listPostitsbyId(this.state.userId)
        if (texts !== undefined) {
            this.setState({ texts })
        } else {
            this.setState({ texts: [] })
        }
    }

    render() {
        const { register, login, userId, error } = this.state

        return <div>

            {!register && !login && !userId && <section>
                <button onClick={this.OnHanldeRegister}>Register</button> or <button onClick={this.OnHandleLogin}>Login</button></section>}

            {this.state.register && <Register handleRegister={this.handleRegister} />}

            {this.state.login && <Login handleLogin={this.handleLogin} />}

            {userId && <section><button onClick={this.handleLogoutClick}>Logout</button></section>}

            {/* TODO show Home on successful login */}
            {userId && <Home texts={this.state.texts} handleDelete={this.handleDelete} handleEditPost={this.handleEditPost} handleSubmit={this.handleSubmit} userId={userId} />}
        </div>


    }
}

export default App;
