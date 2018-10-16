const storage = sessionStorage
// const storage = localStorage


//Model (domain)

if (!storage.getItem('postits'))
    storage.setItem('postits', JSON.stringify([]))


class Postit {
    constructor(text) {
        this.text = text
        this.id = Date.now()
    }
}

//bussiness

const logic = {
    
    createPostit(text) {
        const postit = new Postit(text)

        const postits = JSON.parse(storage.getItem('postits'))

        postits.push(postit)

        storage.setItem('postits', JSON.stringify(postits))

    },

    listPostits(id) {
        return JSON.parse(storage.getItem('postits'))

    },

    deletePostit(id){
        let postits = JSON.parse(storage.getItem('postits'))

        postits = postits.filter(postit => postit.id !== id)

        storage.setItem('postits', JSON.stringify(postits))
    }
}


class InputForm extends React.Component {
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

function Article (props) {

    return <article className="post">
        <p>{props.postItText}</p>
        <button className="btn btn-warning" onClick = {()=> props.DadDelete(props.id)}>Delete Me</button>
        <button className="btn btn-warning" onClick = {()=> props.DadEdit(props.id)}>Edit Me</button>
        <InputForm />
       
        {/* <button className="btn btn-warning" onClick = {()=> props.DadEdit(props.id)}>Edit Me</button> */}
        
     </article>
}

class App extends React.Component {
    state = { postits: JSON.parse(storage.getItem('postits'))}

    handleSubmit = text => {
        logic.createPostit(text)

        this.setState({ postits: logic.listPostits() })
    }

    handleDelete = id => {
        
        logic.deletePostit(id)

        this.setState({ postits: logic.listPostits() })
    }

    handleEdit = (newText, id) => {

        let postits = JSON.parse(storage.getItem('postits'))
        
        let editPostit = postits.filter(postit => postit.id === id)

        editPostit.text = newText
        
        storage.setItem('postits', JSON.stringify(postits))
    }


    render() {
        return <section> 
            <h1>Post-It App <i className="fas fa-sticky-note"></i></h1>
            <InputForm DadSubmit={this.handleSubmit}/>
            <section>  
                {this.state.postits.map(postit => <Article key={postit.id} id={postit.id} postItText={postit.text} DadDelete={this.handleDelete} DadEdit={this.handleEdit}/>)}
            </section> 
        </section>
    }
}

ReactDOM.render(<App />, root)
