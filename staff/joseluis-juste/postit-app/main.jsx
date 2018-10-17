class PostItComponent extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {

        var pseudoBefore = window.getComputedStyle(this._reactInternalFiber.return.stateNode.getElementsByTagName("article")[0], ':before')

    }

    showModal = () => {

        $('#myModalHorizontal').modal('show');

    }

    render() {
        return <article onClick={() => { /*this.props.onDeletePost(this.props.index) }*/ }} className="postit icon-x">{this.props.message}
            <button onClick={(ev) => this.showModal()} className="btn btn-primary btn-lg">Edit</button>
        </article>
    }
}

class BoardComponent extends React.Component {

    state = { posts: [] }

    constructor(props) {
        super(props);
    }

    addPostIt = (message) => {

        this.state.posts.push(new PostIt(message));
        const postss =
            this.setState({ posts: this.state.posts });
    }

    deletePostIt = (index) => {

        let filtered = this.state.posts.filter((post) => post.id !== index);
        this.setState({ posts: filtered });
    }

    editPostIt = (index) => {

        let filtered = this.state.posts.filter((post) => post.id !== index);
        this.setState({ posts: filtered });
    }



    render() {


        return <section className="board">
            <div className="modal fade" id="myModalHorizontal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Body */}
                        <div className="modal-body">
                            <form className="form-horizontal" role="form">
                                <div className="form-group">
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="inputEmail3" placeholder="Text..." />
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
                            <button type="button" className="btn btn-default" data-dismiss="modal">
                                Close
                </button>
                        </div>
                    </div>
                </div>
            </div>
            <form action="">
                <input type="text" name="message" id="message" placeholder="Type your postit message..." />
                <button onClick={(ev) => { ev.preventDefault(); this.addPostIt(document.getElementById("message").value) }}>Send...</button>
            </form>
            <section className="board__panel-postits">
                {
                    this.state.posts.map((post, index) => <PostItComponent key={post.id} index={post.id} onDeletePost={this.deletePost} message={post.text}></PostItComponent>)
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