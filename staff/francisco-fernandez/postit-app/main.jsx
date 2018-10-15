function Button(props) {
    return <button onClick={props.addPostit}>{props.operation}</button>
}

class App extends React.Component {

    state = { text: "Write text here..."}

    setText = event => {
        const text = event.target.value
        this.setState({ text })
    }

    addPostit = () => {
        const result = this.state.text
        this.setState({ result })
        
    }

    render() {
        return <div>
            <h1>Post-It App</h1>
            <form>
                <textarea placeholder={this.state.text}></textarea>
                <Button operation="Add Postit" onClick={this.addPostit}></Button>
            </form>
            <section>
                <article value={this.state.result}></article>
            </section>
        </div>
       
    }
}

ReactDOM.render(<App />, document.getElementById('root'))