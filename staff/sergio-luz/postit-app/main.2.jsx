function Post(props) {
    return <article className="article">{props.text}</article>
}

class Menu extends React.Component {
    state = { text: '' }

    handleInput = event => {
        console.log('InputForm', 'handleInput (setState)')
        
        const text = event.target.value

        this.setState({ text })
    }

    handleSubmit = event => {
        console.log('InputForm', 'handleSubmit (setState)')

        event.preventDefault()

        this.props.onSubmit(this.state.text)

        this.setState({ text: '' })
    }

    render() {
        console.log('InputForm', 'render')

        return <form onSubmit={this.handleSubmit}>
            <textarea value={this.state.text} placeholder="Write text here..." onChange={this.handleInput} />
            <button type="submit">Create</button>
        </form>
    }
}

class App extends React.Component {

    state = {
        texts: []

    }

    handleSubmit = this.handleSubmit.bind(this)
    addText = this.addText.bind(this)

    handleSubmit(event) {
        const texts = this.state.texts.concat(event)

        this.setState({ texts })
    }


    addText(event) {
        event.preventDefault()
        this.setState(prevState => ({
            texts: [...prevState.texts, this.state.text]
        }))
    }


    render() {
        return <div className="container">
            <h1>Post-It App</h1>
            <Menu onSubmit={this.handleSubmit} onClick={this.addText} />
            <section className="posts-container">
                {this.state.texts.map((post, index) => {
                    return <Post key={index} text={post} />
                })}
            </section>

        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))