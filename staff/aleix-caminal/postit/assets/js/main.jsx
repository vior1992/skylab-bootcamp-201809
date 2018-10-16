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
                <button className="add__button">New Board</button>
            </form>
        </section>
    }
}
class Post extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <article className="board__post">{this.props.title}</article>
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {posts: []}
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    handleKeyPress(event) {
        if (event.key === 'Enter' && event.target.value) {
            this.setState({posts:[...this.state.posts, event.target.value]})
            event.target.value = '';
        }
    }

    render() {
        return <section className="board">
            <h2 className="board__title">{this.props.title}</h2>
            {this.state.posts.map((post) => {
                return <Post title={post} />
            })}
            <Input onKeyPress={this.handleKeyPress} />
        </section>
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {boards: ['TODO', 'WIP', 'DONE']}
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
    }

    render() {
        return <section className="main">
            <h1 className="main__title">Cello</h1>
            <section className="main__boards">
                {this.state.boards.map((board) => {
                    return <Board title={board} />
                })}
                <Add onSubmit={this.handleSubmit} />
            </section>
        </section>
    }
}

ReactDOM.render(<App />, document.body)
