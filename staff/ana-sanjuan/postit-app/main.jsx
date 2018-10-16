function Article (props) {
    return <section>
        <article>{props.postItText}</article>
        </section>
}

class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = { textValue: "", posts: []}
    }
    
    keepValue = event => {
        const textValue = event.target.value
        this.setState({textValue})
    }

    createPostIt = event => {
        event.preventDefault()
        this.setState(prevState => ({
            posts: [...prevState.posts, this.state.textValue]
          }))    
     }

    render() {
        return <section> 
            <form>
                <textarea placeholder="Write text here..." onChange={this.keepValue} value = {this.state.textValue}></textarea>
                <button type= "button" onClick = {this.createPostIt}>Create</button>
            </form>
                {this.state.posts.map(post => <Article postItText= {post}/>)}
        </section>
    }
    
}

ReactDOM.render(<App />, root)
