function Button(props) {
    return <button onClick={() => this.props.operation(this.props.textu)}>Create Post-it</button>
}

class Menu extends React.Component {

    state = { textToAdd: 'Write text here...' }

    keepText = event => {
        event.preventDefault()
        const textToAdd = event.target.value

        this.setState({ textToAdd })
    }


    render() {
        return <div className='menu'>
            <h1>Post-It App</h1>
            <form>
                <textarea placeholder={this.state.textToAdd} onChange={this.keepText} ></textarea>
                <Button type="submit" operation={this.props.operation} textu={this.state.textToAdd}></Button>
            </form>
        </div>
    }
}


class App extends React.Component {
    state = { textToAdd: '' , list:[]}

    keepText = text => {
        text.preventDefault()

        let textToAdd = text

        this.setState({ textToAdd })
    }

    createPostit = textToAdd => {
        etextToAdd.preventDefault()

        this.keepText(textToAdd)
        const list=[...this.state.list, this.state.textToAdd]
        this.setState({list})
    }

    render() {
        return <div>
            <Menu operation={this.createPostit} />
            <div>
                {this.state.list.map((text) =>
                     <article>{text}</article>
                )}
            </div>
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))