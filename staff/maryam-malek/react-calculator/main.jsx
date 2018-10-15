const root = document.getElementById('root')

class Input extends React.Component {
    getInitialState = () => {
        return {
          inputValue: ''
        };
        
    } 
     
    render() {
        return (
          <input value={this.state.inputValue} onChange={this.updateInputValue}/>
        );
      }
    
    updateInputValue (event) {
        this.setState({
          inputValue: event.target.value
        });
    }
    
}

class In extends React.Component {
    getInitialState = () => {
        return {
          inputValue: ''
        };
        
    } 
     
    render() {
        return (
          <input value={this.state.inputValue} onChange={this.updateInputValue}/>
        );
      }
    
    updateInputValue (event) {
        this.setState({
          inputValue: event.target.value
        });
    }
    
}

class Button extends React.Component {

    render() {

    }
}

class Plus extends React.Component {

    render() {
        return
        <Button/>
    }
}
class Minus extends React.Component {

    render() {
        return
        <Button/>
    }
}
class X extends React.Component {

    render() {
        return
        <Button/>
    }
}
class Div extends React.Component {

    render() {
        return
        <Button/>
    }
}

class App extends React.Component {

    render() {
        return <section>
            <h1>Calculator</h1>
            <Input/>
            <Plus/>
            <Minus/>
            <X/>
            <Div/>
            <In/>
            <input/>
        </section>
    }

}

ReactDOM.render(<App />, root)

