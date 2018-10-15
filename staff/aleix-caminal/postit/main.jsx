class Input extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <input onKeyPress={this.props.onKeyPress} />
    }
}

class Post extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <article className="postit">{this.props.title}</article>
    }
}

class App extends React.Component {
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
        return <section>
            <h1>Post-It App</h1>
            <Input onKeyPress={this.handleKeyPress} />
            {this.state.posts.map((post) => {
                return <Post title={post} />
            })}
        </section>
    }
}

ReactDOM.render(<App />, document.body)
