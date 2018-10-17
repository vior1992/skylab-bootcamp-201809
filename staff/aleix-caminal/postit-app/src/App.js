import React, { Component } from 'react';
import LOGIC from './logic'

function Input(props) {
    return <input className="board__input" onKeyPress={props.onKeyPress} placeholder="Add another post" />
}

function Add(props) {
    return <section className="add">
        <form onSubmit={props.onSubmit}>
            <input className="add__input" type="text" placeholder="Add another board" />
            <button className="add__button">Add Board</button>
        </form>
    </section>
}

function Post(props) {
    return <article className="post">
        <button className="post__button" onClick={props.onDelete}>X</button>
        <h3 className="post__title">{props.title}</h3>
    </article>
}

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title,
            posts: LOGIC.find('posts', {
                board_id:this.props.id
            }
        )}

        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleKeyPress(event) {
        if (event.key === 'Enter' && event.target.value) {
            this.setState({
                posts:LOGIC.addPost({
                    title: event.target.value,
                    board_id: this.props.id
                })
            })

            event.target.value = '';
        }
    }

    handleDelete(id) {
        this.setState({
            posts:LOGIC.deletePost(id)
        })
    }

    handleChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    render() {
        return <section className="board">
            <button className="board__button" onClick={this.props.onDelete}>X</button>
            <input className="board__title" value={this.state.title} onChange={this.handleChange} onBlur={() => this.props.onUpdate(this.props.id, this.state.title)} />
            {this.state.posts.map((post) => {
                return <Post key={post.id} id={post.id} title={post.title} onDelete={() => this.handleDelete(post.id)} />
            })}
            <Input onKeyPress={this.handleKeyPress} />
        </section>
    }
}

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boards:LOGIC.all('boards')
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        let input = event.target.querySelector('input');
        this.setState({
            boards:LOGIC.addBoard({
                title: input.value
            })
        })

        input.value = ''
    }

    handleDelete(id) {
        this.setState({
            boards:LOGIC.deleteBoard(id)
        })
    }

    handleUpdate(id, title) {
        this.setState({
            boards:LOGIC.updateBoard(id, {
                title: title
            })
        })
    }

    render() {
        return <section className="main">
            <h1 className="main__title"><span role="img" aria-label="jsx-a11y/accessible-emoji">🎻</span> Cello</h1>
            <section className="main__boards">
                {this.state.boards.map((board) => {
                    return <Board key={board.id} id={board.id} title={board.title} onDelete={() => this.handleDelete(board.id)} onUpdate={this.handleUpdate} />
                })}
                <Add onSubmit={this.handleSubmit} />
            </section>
        </section>
    }
}

export default App;
