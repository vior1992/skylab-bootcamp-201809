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

                <textarea placeholder="Write text here..." type="text" value={this.state.text} onChange={this.handleChange} />

                <button type="submit" onClick={this.addText} value="Submit">Create</button>
            </form>
             {this.state.texts.map((post) => {
                return <PostIt text={post} />
            })}
            
            
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))