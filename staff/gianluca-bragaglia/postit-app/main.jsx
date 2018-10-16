function PostIt(props) {
    console.log(props.index);
    
    return <section>
                <article className="article">{props.text}</article>
                <button className="button-delete" onClick={() => props.onDelete(props.index)}>delete</button>
            </section>        
} 


class App extends React.Component {

    state = { 
        text: '',
        texts: []
        
    }

    handleChange = event => {
        this.setState({text: event.target.value});
      }
    
    
    handleSubmit = event => { 
        event.preventDefault()   
        this.setState(prevState => ({
            texts: [...prevState.texts, this.state.text]
          }))
        this.setState({text: ''})

    }


    handleDeletePostit = index => {       
        /* this.state.texts.splice(index,1)
        this.setState({texts:this.state.texts}) */
        const texts = this.state.texts.filter((texts, _index) => index !== _index)
        this.setState({texts})
    }

    render() {
        return <div className="container">
            <h1>Post-It App</h1>
            <form onSubmit={this.handleSubmit}>
                <textarea placeholder="Write text here..." type="text" onChange={this.handleChange} value={this.state.text} /><br></br>
                <button className="button" type="submit">Create</button>
            </form>
            <div className="posts-container">
                {this.state.texts.map((post,index) => {
                    return <PostIt onDelete={this.handleDeletePostit} key={index} index ={index} text={post} />
                        
                })}
            </div>
                       
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))