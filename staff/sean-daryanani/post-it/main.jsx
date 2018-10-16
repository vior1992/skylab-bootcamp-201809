function List(props) {

    return <ul>
    {props.items.map((el,index) => 
    <li onClick = {(ev) => props.removeToDo(index)} key={index}>{el}</li>)}
    </ul>
}



class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

            input: '',
            items: []
        }

        this.keepText = this.keepText.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.removeToDo = this.removeToDo.bind(this)
    }

    keepText(event) {
        this.setState({
            input: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()
        this.setState({
            items : [...this.state.items, this.state.input],
            input:''
        })

        }

    removeToDo(index) {
        
        this.setState({
            items: this.state.items.filter((el,i)=> i!==index)
            
        })
        

    }

    render() {
        return <div>
        <form  onSubmit={this.onSubmit}>
        <textarea cols="40" rows="10" value={this.state.input}  onChange={this.keepText} placeholder='' type="text"/>
        <button type="submit">Submit</button>
        </form>
        <List items={this.state.items} removeToDo={this.removeToDo} />
        </div>

    }
}


ReactDOM.render(<App/>, document.getElementById('root'))