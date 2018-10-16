

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
            text : event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        this.props.onSubmit(this.state.text)

        this.setState({text: ''})
    }

    render() {
        return <form className="form-group" onSubmit={this.handleSubmit}>
        <textarea className="form-control" cols="30"  value={this.state.text}  onChange={this.handleInput} placeholder='' type="text"/>
        <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    }

}

function Post(props) {
    function showPopup() {

    }
    return <ul className="list-group">
    <button onClick={() => props.popup(props.id)} className="btn btn-info"><i className="far fa-edit"></i></button>
    <li className="list-group-item list-group-item-warning" >{props.text}</li>    
    <button  className="btn btn-info" onClick={() => props.onDeletePost(props.id)}><i className="far fa-trash-alt"></i></button>    

    </ul>
  

    
}

class Popup extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text:''
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(event) {
        this.setState({
            text : event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        this.props.onUpdate(this.props.id, this.state.text)

        this.setState({text: ''})
    }

    render() {
        return <div className="popup">
        <form onSubmit={this.handleSubmit} className="form-group">
        <textarea value={this.state.text} onChange={this.handleInput}/>
        <button>Save changes</button>
        </form>
        
        </div>
    }
}




class App extends React.Component {
    state = {
         postits: logic.listPostits(),
         showPopup: false,
         clickedID : 0
     }

    handleSubmit = text => {
        logic.createPostit(text)
        
        this.setState({ postits: logic.listPostits() })
    }

    handleDeletePost = id => {
        
        logic.deletePostit(id)

        this.setState({ postits : logic.listPostits(),
        showPopup :false })
    }

    handleUpdatePost = (id, text) => {
        logic.updatePost(id, text)

        this.setState({postits : logic.listPostits(),
        showPopup : false})
    }

    togglePopup = (id) => {
       
        this.setState({
            showPopup : !this.state.showPopup,
            clickedID : id
        })
    }


    render() {

        return <div className="container">
        <h1>Post it App</h1>
        <InputForm onSubmit = {this.handleSubmit} />
        {this.state.postits.map( postit => <Post key={postit.id} text={postit.text} id={postit.id} onDeletePost = {this.handleDeletePost} editing = {this.state.showPopup} popup = {this.togglePopup} />)}
        {this.state.postits.map(postit => (this.state.showPopup && postit.id===this.state.clickedID) ? <Popup onUpdate={this.handleUpdatePost} key={postit.id} id={postit.id}/> : null)}
        </div>

    }
}


ReactDOM.render(<App/>, document.getElementById('root'))

