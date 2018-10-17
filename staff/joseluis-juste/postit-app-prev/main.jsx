class ModalComponent extends React.Component {

    constructor(props) {

        super(props);
    }

    onSubmitText = (value) => {

        this.props.onSubmitText(value);
        $('#' + this.props.id).modal('hide');
       

    }


    render() {
        return <div className="modal fade" id={this.props.id} tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    {/* Modal Body */}
                    <div className="modal-body">
                        <form className="form-horizontal" role="form" onSubmit={(ev) => {
                            ev.preventDefault();
                            this.onSubmitText($(ev.target).find("#inputEmail3").val());

                        }}>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" readOnly className="form-control"  placeholder={"OldValue: " + this.props.oldmessage}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="inputEmail3" placeholder="Text..."/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button type="submit" className="btn btn-default">Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* Modal Footer */}
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" onClick = {(ev) => $('#' + this.props.id).modal('hide')}>
                            Close
        </button>
                    </div>
                </div>
            </div>
        </div>

    }
}

class PostItComponent extends React.Component {

    state = {message:''}
    
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {

        this.setState({message: this.props.message});

    }

    showModal = () => {

        $('#' + this.props.id).modal('show');

    }

    handleSubmitText = (text) => {

        this.setState({message: text});
        this.props.onUpdatePost(this.props.id, text);

    }

    
    render() {
        return <article className="postit">{this.state.message}
            <ModalComponent id = {this.props.id} oldmessage = {this.state.message} onSubmitText={this.handleSubmitText} />
            <a  onClick={() => { this.props.onDeletePost(this.props.id) } } href="#" className="icon-x"></a>
            <button onClick={(ev) => this.showModal()} className="btn btn-primary btn-lg">Edit</button>
        </article>
    }
}

class BoardComponent extends React.Component {

    state = { posts: [] }

    constructor(props) {
        super(props);
                
    }

    componentDidMount() {

        let postits = JSON.parse(window.sessionStorage.getItem("postits"));
        if (postits && postits.length > 0)
            this.setState({posts:  postits});
    }

    addPostIt = (message) => {

        let postits = Array.from(this.state.posts);
        postits.push(new PostIt(message));
        this.setState({posts:  postits}, this.storeInSession);
       
    }

    storeInSession = () => {

        window.sessionStorage.setItem("postits", JSON.stringify(this.state.posts));
    }

    deletePostIt = (id) => {

        let postits = Array.from(this.state.posts);
        postits = postits.filter((post) => post.id !== id);
        this.setState({ posts: postits }, this.storeInSession);
    }

    editPostIt = (id, text) => {

        let postit = this.state.posts.find((post) => post.id === id);
        postit.text = text;
        this.setState({posts:  this.state.posts}, this.storeInSession);
    }



    render() {


        return <section className="board">
            <form action="">
                <input type="text" name="message" id="message" placeholder="Type your postit message..." />
                <button onClick={(ev) => { ev.preventDefault(); this.addPostIt(document.getElementById("message").value) }}>Send...</button>
            </form>
            <section className="board__panel-postits">
                {
                    this.state.posts.map((post) => <PostItComponent key={post.id} id={post.id} onUpdatePost = {this.editPostIt} onDeletePost={this.deletePostIt} message={post.text}></PostItComponent>)
                }
            </section>

        </section>

    }
}

class App extends React.Component {

    render() {

        return <BoardComponent></BoardComponent>
    }
}



ReactDOM.render(<App />, document.getElementById('root'));