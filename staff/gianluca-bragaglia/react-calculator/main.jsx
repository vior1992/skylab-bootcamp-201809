const root = document.getElementById('root')


class InputFirstNumber extends React.Component {

    render() {
        return <input type="number"/>
    }
}

class ButtonSum extends React.Component {
    

    sum = () => {

    }

    render() {
        return <button onClick={this.sum}>+</button>
    }
}

class ButtonMultiply extends React.Component {
    

    multiply = () => {

    }

    render() {
        return <button onClick={this.multiply}>*</button>
    }
}

class App extends React.Component {


    render() {
        return  <section>
                 <InputFirstNumber />
                 <ButtonSum />
                 <ButtonMultiply />
                </section>

    }
        
   
}



ReactDOM.render(<App />, root)
