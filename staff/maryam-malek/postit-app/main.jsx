
function Button (props) {
    return <button onClick={}>Create</button>
}

function Form (props) {
    state = {inputText: ''}
    return <form>
        <textarea value={this.state.inputText}></textarea>
        <Button></Button>
    </form>
}

function Section (props) {
    return <section>
        <article></article>
    </section>
}

class App extends React.Component {

    state = {}

    render() {
        return <section>
        <h1>Post-It App</h1>
        <Form></Form>
        <Section></Section>
    </section>
        
    }
}




ReactDOM.render(<App />, document.getElementById('root'))
