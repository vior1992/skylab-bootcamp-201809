import React, { Component } from 'react';
import LOGIC from './logic'
import Login from './components/Login'
import Register from './components/Register'
import Board from './components/Board'

function Add(props) {
    return <section className="add">
        <form onSubmit={props.onSubmit}>
            <input className="add__input" type="text" placeholder="Add another board" />
            <button className="add__button">Add Board</button>
        </form>
    </section>
}

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: 'login',
            boards: LOGIC.all('boards')
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        let input = event.target.querySelector('input');
        this.setState({
            boards: LOGIC.addBoard({
                title: input.value
            })
        })

        input.value = ''
    }

    handleDelete(id) {
        this.setState({
            boards: LOGIC.deleteBoard(id)
        })
    }

    handleUpdate(id, title) {
        this.setState({
            boards: LOGIC.updateBoard(id, {
                title: title
            })
        })
    }

    handleLogin(event) {
        event.preventDefault()
        this.setState({
            auth: LOGIC.login(
                event.target.querySelector('input[name="username"]').value,
                event.target.querySelector('input[name="password"]').value
            )
        })
    }

    handleRegister(event) {
        event.preventDefault()
        this.setState({
            auth: LOGIC.register(
                event.target.querySelector('input[name="name"]').value,
                event.target.querySelector('input[name="username"]').value,
                event.target.querySelector('input[name="password"]').value,
                event.target.querySelector('input[name="confirm_password"]').value
            )
        });
    }

    render() {
        return <section className="main">
            <h1 className="main__title"><span role="img" aria-label="jsx-a11y/accessible-emoji">🎻</span> Cello</h1>
            {!this.state.auth ? (
                <section className="main__auth">
                    {this.state.view === 'login' ? (
                        <Login onClick={() => this.setState({view:'register'})} onSubmit={this.handleLogin} />
                    ) : (
                        <Register onClick={() => this.setState({view:'login'})} onSubmit={this.handleRegister} />
                    )}
                </section>
            ) : (
                <section className="main__boards">
                    {this.state.boards.map((board) => {
                        return <Board key={board.id} id={board.id} title={board.title} onDelete={() => this.handleDelete(board.id)} onUpdate={this.handleUpdate} />
                    })}
                    <Add onSubmit={this.handleSubmit} />
                </section>
            )}
        </section>
    }
}

export default App;
