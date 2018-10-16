class PostIt extends React.Component{

    constructor(props){
        super(props);
       
    }

    componentDidMount(){

        var pseudoBefore = window.getComputedStyle(this._reactInternalFiber.return.stateNode.getElementsByTagName("article")[0], ':before') 
        
    }

    render(){        
        return <article onClick={() => {this.props.onDeletePost(this.props.index)}} className="postit icon-x">{this.props.message}</article>    
    }
}

class BoardComponent extends React.Component{

    state = {posts:[]}

    constructor(props){
        super(props);
    }

    addPostIt = (message) => {

        this.state.posts.push(message);
        this.setState({posts:this.state.posts});
    }

    deletePost = (index) =>{

        this.state.posts.splice(index,1);
        this.setState({posts:this.state.posts});
    }
 

    render(){

        
        return <section className="board">

            <form action="">
                <input type="text" name="message" id="message" placeholder = "Type your postit message..."/>
                <button onClick = {(ev) => {ev.preventDefault();this.addPostIt(document.getElementById("message").value)}}>Send...</button>
            </form>
            <section className="board__panel-postits">
                {
                    this.state.posts.map((post,index) => <PostIt onDeletePost = {this.deletePost}  index = {index} message = {post}></PostIt>)                 
                }
            </section>

        </section>       

    }
}

ReactDOM.render(<BoardComponent />, document.getElementById('root'));