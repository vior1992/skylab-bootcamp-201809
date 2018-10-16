function PostIt(props) {
    return <section>
                <article className="article">{props.text}</article>
            </section>        
} 


class App extends React.Component {

    state = { 
        text: '',
        texts: []
        
    }

    handleChange = this.handleChange.bind(this)
    addText = this.addText.bind(this)

    handleChange(event) {
        event.preventDefault()
        this.setState({text: event.target.value});
      }
    
    
    addText(event) { 
        event.preventDefault()     
        this.setState(prevState => ({
            texts: [...prevState.texts, this.state.text]
          })) 

    }


    render() {
        return <div className="container">
            <h1>Post-It App</h1>
            <form>
                <textarea placeholder="Write text here..." type="text" onChange={this.handleChange} /><br></br>
                <button type="submit" onClick={this.addText} value="Submit">Create</button>
            </form>
            <div className="posts-container">
                {this.state.texts.map((post) => {
                    return <PostIt key={post} text={post} />
                })}
            </div>
                       
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))