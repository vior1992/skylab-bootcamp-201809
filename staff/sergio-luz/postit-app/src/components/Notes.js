import React, {Component} from 'react'

class Notes extends Component {

    state = { text: this.props.text }

    handleInput = event => {
        this.setState({ text: event.target.value })
    }

    render() {
        return <article className="article" id={this.props.index}>
            <textarea name="" cols="30" rows="10" disabled onChange={this.handleInput}
                value={this.state.text}></textarea>

            <button onClick={() => this.props.handleDelete(this.props.index)} >Eliminate</button>

            <button id={'edit'} onClick={() => this.props.handleEditPost(this.props.index, this.children)} >Edit</button>

        </article>
    }
}

export default Notes