function PostIt(props) {
    return <section>
        <article className="article">{props.text}</article>
    </section>
}

function Button() {

    return <button type="submit" onClick={this.props.props.onClick} value="Submit">Create</button>

}

class Menu extends React.Component {
    onClicked = this.onClicked.bind(this)


    state = {
        ruta:""
    }
    constructor(){
        super()
    }

    onClicked(event) {
        event.preventDefault()
        const ruta=this.props.onClick
        this.setState({ruta})
        ruta()
        // {console.log('hola')}

    }

    render() {
        return <form>
            <textarea placeholder="Write text here..." type="text" onChange={this.props.onChange} /><br></br>
            <button type="submit" onClick={this.onClicked} value="Submit">Create</button>

            {/* <Button  onClick={this.props.onClick}></Button> */}
        </form>
    }
}

class App extends React.Component {

    state = {
        text: '',
        texts: []

    }

    handleChange = this.handleChange.bind(this)
    addText = this.addText.bind(this)

    handleChange(event) {
        event.preventDefault()
        this.setState({ text: event.target.value });
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
            <Menu onChange={this.handleChange} onClick={this.addText} />
            <div className="posts-container">
                {this.state.texts.map((post) => {
                    return <PostIt key={post} text={post} />
                })}
            </div>

        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))