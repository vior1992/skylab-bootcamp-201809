import React, { Component } from 'react'

class Login extends Component {
    state = { text: this.props.text }


    handlesign = () => {
        this.props.login(this.props.id, this.state.text)
    }

    render() {
        console.log('Post', '"render"')

        return <form onSubmit={this.handleSubmit}>
        <input className="inputDates" type="text" placeholder="Username..." onChange={this.handleInput} />
        <input className="inputDates" type="password"  placeholder="password..." onChange={this.handleInput} />

        <button onClick={() => this.props.onDeletePost(this.props.id)}></button>
    </form>
    }
}

export default Login