function PostIt (props) {

    return <section>
        <article className='postIt'>{props.paint}</article>
    </section> 
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { inputText: [], text: '' }
    }

    show = event => {
        event.preventDefault()     
        this.setState(prevState => ({
            inputText: [...prevState.inputText, this.state.text]
          }))    
    }

    keepText = event => {
        const text = event.target.value
        this.setState({text})
   
    }

    render() {
        return <section>
            <h1>Post-It App</h1>
            <form>
                <textarea placeholder='Write your text...' value={this.state.text} onChange={this.keepText}></textarea>
                <button type= 'button' onClick={this.show}>Create</button>
            </form>
            {this.state.inputText.map(x => <PostIt paint={x}/>)}
        </section >

    }
}

ReactDOM.render(<App />, document.getElementById('root'))
