import React, { Component } from 'react'

class InputForm extends Component {
    state = { query: '' }

    handleInput = event => {
        const query = event.target.value

        this.setState({ query })
    }

    handleSubmit = event => {
        event.preventDefault()

        this.props.onSubmit(this.state.query)

        this.setState({ query: '' })
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <input value={this.state.query} placeholder="Search events" onChange={this.handleInput} />

            <button type="submit"></button>
        </form>
    }
}

export default InputForm