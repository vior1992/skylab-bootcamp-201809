
const root = document.getElementById('root')

function Button(props) {
    return <button type='button' onClick={props.onClick}>Hello World!</button>
}

function PostIt(props){
    
    
    console.log(props.casa1)
    console.log(props.casa)
    return  <div >{props.casa}{props.casa1}</div>
}


class App extends React.Component {
    state = { text:[] }

    keepText  = event => {
        const text = event.target.value
        this.setState({ text })
        console.log(text)
        
    }
   
    createText =() =>{
        
        let inputs = this.state.text;
        inputs.push('uno');
        console.log(this.state.text);
        this.setState({text:inputs});
        
    }

    
    render() {
        
        return <div>  <h1>Post-It App</h1>
        <form className='form'>
        <textarea placeholder="Write text here..." onChange={this.keepText}></textarea>
            <Button onClick={this.createText}></Button> 
        </form>
    
        <section>
        {/* {this.state.texts.map((post) => {
                return <PostIt text={post} />
            })} */}
        {   
            
            this.state.text.map((kk) => {

                return <PostIt casa = {kk} casa1 = {kk}></PostIt>

            }) }
        }
        </section></div>
        
       
    }
}


ReactDOM.render(<App />, document.getElementById('root'))