
function Button(props) {
    return <button type='button' onClick={props.clicked}>Create</button>
}

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = { inputText: '' }
    }

    show = () => {
        console.log(this.state.inputText)
    }

    keepText = () => {
        const inputText = event.target.value
        this.setState({inputText})
    }

    render() {
        return <form>
            <textarea value={this.state.inputText} onChange={this.keepText}></textarea>
            <Button clicked={this.show}></Button>
        </form>
    }
}

function Section() {
    return <section>
        <article></article>
    </section>
}

function App() {

    return <section>
        <h1>Post-It App</h1>
        <Form></Form>
        <Section></Section>
    </section>


}




ReactDOM.render(<App />, document.getElementById('root'))
