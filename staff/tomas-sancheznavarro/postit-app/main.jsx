// segunda iteración, separada en componentes

class InputForm extends React.Component {
    state = { text: '' }

    handleInput = event => {
        console.log('InputForm', 'handleInput (setState)')

        const text = event.target.value

        this.setState({ text })
    }

    handleSubmit = event => {
        console.log('InputForm', 'handleSubmit(setState)')

        event.preventDefault()

        this.props.onSubmit(this.state.text)

        this.setState({ text: '' })
    }

    render() {
        console.log('InputForm', 'render')

        return <form onSubmit={this.handleSubmit}>
            <textarea value={this.state.text} placeholder="Write text here..." onChange={this.handleInput} />
            <button type="submit">Post it!</button>
        </form>
    }
}

function Post(props) {
    console.log('Post', '"render"')
    console.log(props)

    return (
        <div>
            <article className="post">{props.text}</article>
            <button onClick={() => { props.whenClicked(props.kee) }}>X</button>
        </div>
    )
}


class App extends React.Component {
    state = { posts: [] }

    handleSubmit = text => {
        console.log('App', 'handleSubmit(setState')

        const posts = this.state.posts.concat(text)

        this.setState({ posts })
    }

    deletePosts = index => {

        this.setState({ posts: this.state.posts.filter((post, i) => i !== index) })

    }

    render() {
        console.log('App', 'render')
        return <div>
            <h1>Post-It App</h1>

            <InputForm onSubmit={this.handleSubmit} />

            <section>
                {this.state.posts.map((post, index) => <Post kee={index} key={index} text={post} whenClicked={this.deletePosts} />)}
            </section>
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))