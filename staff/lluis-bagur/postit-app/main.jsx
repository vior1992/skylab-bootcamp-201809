function Button(props) {
    return <button className="btn" value="Add PostIt" onClick={props.onClick} > Add new PostIt </button>
}

class App extends React.Component {
    constructor (props) {
        super (props)
        this.state = { text: '', postit: []}
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event) {
        this.setState({text: event.target.value})
    }

    handleClick(){

        this.setState({postit:[...this.state.postit, this.state.text]})
        this.state.text=""
    }



    render() {
        return <div className="cont">

            <div className="app_cont">

                <h1 className="title">Post-It App</h1>
                <textarea className="textarea" value={this.state.text} onChange={this.handleChange} />

                <Button onClick={this.handleClick}></Button>

            </div>
                <div className="article_cont">
                    {this.state.postit.map((postit) =>{
                        return <article className="article">{postit}</article>
                    })}
            </div>
        </div>
        }
}   

ReactDOM.render(<App />, document.getElementById('root'))