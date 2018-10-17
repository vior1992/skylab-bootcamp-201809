import React, { Component } from 'react'

class Article extends Component {

    state = {textValue: "" , }

    handleInput = event => {
        const textValue = event.target.value

        this.setState({textValue})
    }

    handleSubmit = event => {
        event.preventDefault()
        
        this.props.DadSubmit(this.state.textValue)

        this.setState({ textValue: '' })
      
    }

    handleVisibility = () => {

    }
   

    render(){
        return <article className="post">
            <p>{this.props.postItText}</p>
            <button className="btn btn-warning" onClick = {()=> this.props.DadDelete(this.props.id)}>Delete Me</button>
            <button className="btn btn-warning" onClick = {()=> this.handleVisibility()}>Edit Me</button>
            <form className = 'editForm' onSubmit={this.handleSubmit} >
                <textarea placeholder={this.props.postItText} onChange={this.handleInput} value = {this.state.textValue} ></textarea>
                <button type= "submit" onClick = {()=> this.props.DadEdit(this.props.id)} >Submit Changes</button>
            </form>
            
        </article>
    }
}

export default Article