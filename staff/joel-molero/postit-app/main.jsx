const root = document.getElementById('root')

function Button(props) {
    return <button onClick={props.onClick}>{props.operation}</button>
}

function PostIt(props) {
    return <section>
                <article className="article">{props.postits}</article>
            </section>        
}


class App extends React.Component {
    state = { writeHere: '', postits: [] }

    keepWords = event => {
        const writeHere = event.target.value

        this.setState({ writeHere })
    }

    submit = (event) => {
        event.preventDefault()
        
        const writeHere = this.state.writeHere
        
        this.state.postits.push(writeHere)
        console.log(this.state.postits)

    }

    render() {
        return <form onSubmit={this.submit}>
            <input value={this.state.writeHere} type="text" onChange={this.keepWords} />
            <Button onClick={this.submit}></Button>
        </form>
       <div>
           {this.state.postits.map(elements => {<PostIt />})}

        </div>
    }

}

ReactDOM.render(<App />, document.getElementById('root'))