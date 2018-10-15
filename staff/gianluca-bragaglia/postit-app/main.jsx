function PostIt(props) {
    return <section>
                <article className="article">{props.text}</article>
            </section>
        
} 


class App extends React.Component {

    state = { 
        text: '',
        status:''
        
    }

    handleChange = this.handleChange.bind(this)
    handleSubmit = this.handleSubmit.bind(this)

    handleChange(event) {
        this.setState({text: event.target.value});
      }
    
    handleSubmit(event) {
       // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        this.setState({ status: event.target.name })
        //<PostIt text={this.state.text}></PostIt>
      }


    render() {
        return <div className="container">
            <h1>Post-It App</h1>
            <form>

                <textarea placeholder="Write text here..." type="text" value={this.state.text} onChange={this.handleChange} />

                <button type="submit" onClick={this.handleSubmit} value="Submit" name="yes">Create</button>
            </form>

            {this.state.status === "yes" && <PostIt text={this.state.text}></PostIt>}
            
            
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))