import React, { Component } from 'react'

class InputForm extends Component {
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

export default InputForm