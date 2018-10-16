class KeepMessage extends React.Component {
    state = { text: '' }

    keepMessage = event => {
        const text = event.target.value
    
        this.setState({ text })
    }

    handleInput = event => {
        event.preventDefault()

        this.props.onSubmit(this.state.text)

        this.setState({ text: '' })
    }

    render () {
        return <form className='' onSubmit={this.handleInput}>
        <textarea placeholder="Write your post it here" value={this.state.text} onChange={this.keepMessage} tabIndex="0" />
        <button type="submit">Create</button>
        </form>
    }
}

function Post(props) { 
    return <article className="post">{props.text}</article>
}

class PostId {
    constructor(text) {
        this.next = text
        this.id = Date.now()
    }
}
    
class PostIt extends React.Component {
    state = { posts: [] }

    handleInput = text => {
        const posts = this.state.posts.concat(new PostId(text))

        this.setState({ posts }) 
    }

    deletePost = (id) => {
        const posts = this.state.posts.filter((postId) => postId.id !== id)

        this.setState({ posts })
    }

    render() {
        return <div>
            <h1>Post-it or die trying</h1>

            <KeepMessage onSubmit={this.handleInput}/>
           
            <section>
                {this.state.posts.map((post, index) => 
                {return <div><Post key={PostId.id} text={PostId.text}/><div><button className='deleteButton' index={PostId.id} onClick={this.deletePost}>Delete</button></div></div>} )} 
            </section>

        </div>
    }
}

ReactDOM.render(<PostIt />, document.getElementById('root'))