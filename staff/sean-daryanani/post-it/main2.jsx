

class InputForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }

        this.handleInput = this.handleInput.bind(this)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(event) {
        this.setState({
            input : event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        this.props.onSubmit(this.state.input)

        this.setState({input: ''})
    }

    render() {
        return <form className="form-group" onSubmit={this.handleSubmit}>
        <textarea className="form-control" cols="30"  value={this.state.input}  onChange={this.handleInput} placeholder='' type="text"/>
        <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    }

}

function Post(props) {

    return <ul className="list-group">
    <li className="list-group-item list-group-item-warning" >{props.text}</li>    
    <button onClick={() => props.onDeletePost(props.id)}><i className="far fa-trash-alt"></i></button>
    </ul>
}



class App extends React.Component {
    state = { postits: logic.listPostits() }

    handleSubmit = text => {
        logic.createPostit(text)
        
        this.setState({ postits: logic.listPostits() })
    }

    handleDeletePost = id => {
        
        logic.deletePostit(id)

        this.setState({ postits : logic.listPostits() })
    }


    render() {

        return <div className="container">
        <h1>Post it App</h1>
        <InputForm onSubmit = {this.handleSubmit} />
        {this.state.postits.map( postit => <Post key={postit.id} text={postit.text} id={postit.id} onDeletePost = {this.handleDeletePost} />)}        
        </div>

    }
}


ReactDOM.render(<App/>, document.getElementById('root'))