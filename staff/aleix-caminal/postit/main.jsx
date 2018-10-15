class Input extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <input onChange={this.props.onChange} />
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {text: ''}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({text:event.target.value})
    }

    render() {
        return <section>
            <Input onChange={this.handleChange} />
            <p>{this.state.text}</p>
        </section>
    }
}

ReactDOM.render(<App />, document.body)
