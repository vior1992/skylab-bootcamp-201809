function NumberOne () {
    return <input type = 'number' />
}

function NumberTwo () {
    return <input type = 'number' />
}

function Result () {
    return <input/>
}

class Button extends React.Component {
    state = { }

    whenClicked = () => {

        this.setState({ status })

        this.props.whenClicked()
    }

    render() {
        return <button onClick={this.whenClicked}>{this.state.status}</button>
    }
}



class App extends React.Component {
    state = {status}
    
    render() {
        return <section>  
            <NumberOne/>
            <Button/>
            <NumberTwo/>
            <Result/>
        </section>
    }

}

ReactDOM.render(<App />, root)