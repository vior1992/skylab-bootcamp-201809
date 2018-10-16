function Input(props) {
    return <input className="board__input" onKeyPress={props.onKeyPress} placeholder="Add another post" />
}

class Add extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <section className="add">
            <form onSubmit={this.props.onSubmit}>
                <input className="add__input" type="text" placeholder="Add another board" />
                <button className="add__button">Add Board</button>
            </form>
        </section>
    }
}
class Post extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <article className="post">
            <button className="post__button" onClick={this.props.onDelete}>X</button>
            <h3 className="post__title">{this.props.title}</h3>
        </article>
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {posts:LOGIC.select('Posts')}
        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleKeyPress(event) {
        if (event.key === 'Enter' && event.target.value) {
            this.setState({posts:LOGIC.add('Posts', event.target.value)})
            event.target.value = '';
        }
    }

    handleDelete(id) {
        this.setState({posts:LOGIC.delete('Posts', id)})
    }

    render() {
        return <section className="board">
            <button className="board__button" onClick={this.props.onDelete}>X</button>
            <h2 className="board__title">{this.props.title}</h2>
            {this.state.posts.map((post) => {
                return <Post key={post.id} title={post.title} onDelete={() => this.handleDelete(post.id)} />
            })}
            <Input onKeyPress={this.handleKeyPress} />
        </section>
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {boards:LOGIC.select('Boards')}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        let input = event.target.querySelector('input');
        this.setState({boards:LOGIC.add('Boards', input.value)})
        input.value = ''
    }

    handleDelete(id) {
        this.setState({boards:LOGIC.delete('Boards', id)})
    }

    render() {
        return <section className="main">
            <h1 className="main__title">🎻 Cello</h1>
            <section className="main__boards">
                {this.state.boards.map((board) => {
                    return <Board key={board.id} title={board.title} onDelete={() => this.handleDelete(board.id)} />
                })}
                <Add onSubmit={this.handleSubmit} />
            </section>
        </section>
    }
}

ReactDOM.render(<App />, document.body)
