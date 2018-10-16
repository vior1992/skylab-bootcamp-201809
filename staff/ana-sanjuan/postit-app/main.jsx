class Article extends React.Component {
    state = {}    

    handleClick = event =>{
        event.preventDefault()

        this.props.DadDelete(this.props.index)

    }
    
    render(){
        return <article className="post">
        <p>{this.props.postItText}</p>
        <button className="btn btn-warning" onClick = {this.handleClick}>Delete Me</button>
        </article>
    }
}

class InputForm extends React.Component{
    state = {textValue: "" }

    handleInput = event => {
        const textValue = event.target.value

        this.setState({textValue})

    }

    handleSubmit = event => {
        event.preventDefault()

        this.props.DadSubmit(this.state.textValue)

        this.setState({ textValue: '' })
      
     }

    render(){
        return<form onSubmit={this.handleSubmit} >
            <textarea placeholder="Write text here..." onChange={this.handleInput} value = {this.state.textValue}></textarea>
            <button type= "submit">Create</button>
        </form>
    }
}

class App extends React.Component{
    state = { posts: []}

    handleSubmit = text => {
        const posts = [...this.state.posts, text]

        this.setState({ posts })
    }

    handleDelete = index => {
        this.state.posts.splice(index,1)
    
        this.setState({posts: this.state.posts})
    }
    render() {
        return <section> 
            <InputForm DadSubmit={this.handleSubmit}/>
                
            {this.state.posts.map((post, index) => <Article key={index} index={index} postItText={post} DadDelete={this.handleDelete}/>)}
            
        </section>
    }
}

ReactDOM.render(<App />, root)
