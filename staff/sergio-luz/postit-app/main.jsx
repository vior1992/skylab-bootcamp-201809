// CLASE PADRE DE TODOS

class App extends React.Component {

    state = {
        texts: []

    }

    handleSubmit = this.handleSubmit.bind(this)
    addText = this.addText.bind(this)
    handleDelete = this.handleDelete.bind(this)

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

    handleDelete(INDEXtoBeDeleted) {
        const newTexts = this.state.texts.filter((item, index) => {
            index !== INDEXtoBeDeleted
        });
        this.setState({ texts: newTexts })
    }


    render() {
        return <div className="container">
            <h1>Post-It App</h1>
            <Menu onSubmit={this.handleSubmit} onClick={this.addText} />
            <section className="posts-container">
                {this.state.texts.map((post, index) => {
                    return <Notes key={index} text={post} index={index} handleDelete={this.handleDelete}/>
                })}
            </section>

        </div>
    }
}

// THIS FUNCTION IS A SON OF "App"

function Post(props) {
    return <article className="article">{props.text}</article>
}

// THIS CLASS IS A SON OF "App"

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
            <Button name={'Create'}/>
        </form>
    }
}

// THIS CLASS IS A SON OF "App"

class Notes extends React.Component {

    handleDelete = event => {
        event.preventDefault()

        this.props.handleDelete(this.props.index)

    }

    render() {
        return <div>
            <article className="article">{this.props.text}</article>
            <button onClick={this.props.handleDelete} >X</button>
            {/* <Button name={'X'}/> */}
        </div>
    }

}
// THIS FUNCTION IS A SON OF "MENU"

function Button(props) {
    return <button type="submit">{props.name}</button>
}

// RENFER APP

ReactDOM.render(<App />, document.getElementById('root'))