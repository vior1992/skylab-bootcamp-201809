class Input extends React.Component {
    whenChanged = (event) => {
        console.log(event.target.value);
    }

    render() {
        return <input onChange={this.whenChanged} />
    }
}

class Output extends React.Component {
    render() {
        return <p>{this.props.text}</p>
    }
}

class App extends React.Component {
    output = ''

    render() {
        return <section>
            <Input whenChanged={this.updateOutput} />
            <Output text={this.output} />
        </section>
    }
}

ReactDOM.render(<App />, document.body)
