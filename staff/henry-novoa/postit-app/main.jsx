class InputForm extends React.Component {
    state = { text: '' }

    handleInput = event => {
        console.log('InputForm', 'handleInput (setState)')
        
        const text = event.target.value

        this.setState({ text })
    }

    handleSubmit = event => {
        console.log('InputForm', 'handleSubmit (setState)')

        event.preventDefault()

        this.props.onSubmit(this.state.text)

        this.setState({ text: '' })
    }

    render() {
        console.log('InputForm', 'render')

        return <form className='form' onSubmit={this.handleSubmit}>
            <textarea value={this.state.text} placeholder="Write text here..." onChange={this.handleInput} />
            <button type="submit">Create</button>
        </form>
    }
}

function Post(props) {
    console.log('Post', '"render"')

    return <article className="postit">{props.text}
            <button onClick={()=>props.onDeletePost(props.index)}>Delete</button>
            </article>
}

class App extends React.Component {
    state = { posts: [] }

    handleSubmit = text => {
        console.log('App', 'handleSubmit (setState)')

        //const posts = this.state.posts.concat(text)
        const posts = [...this.state.posts,text]
        this.setState({ posts })
    }

    handleDelete = index =>{
       const posts= this.state.posts.filter((post,_index)=>index !==_index )
    }

    render() {
        console.log('App', 'render')

        return <div>
            <h1>Post-It App</h1>

            <InputForm onSubmit={this.handleSubmit} />

            <section>
                {/* {this.state.posts.map((post, index) => <article key={index} className="post">{post}</article>)} */}
                {this.state.posts.map((post, index) => <Post onDeletePost={this.handleDelete} index={index} key={index} text={post} />)}
            </section>
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))