import React, { Component } from 'react'

class Post extends Component {
    state = { text: this.props.text, status: this.props.status } 


    handleChange = event => {
        const text = event.target.value

        this.setState({ text })
    }

    handleBlur = () => {
        this.props.onUpdatePost(this.props.id, this.state.text)
    }

    handleChangeStatus = event => {
        event.preventDefault()

        const status = event.target.value

        this.setState({ status })

        this.props.onChangeStatus(this.props.id, status)
    }

    render() {
        return <article className="post">
            <textarea defaultValue={this.state.text} onChange={this.handleChange} onBlur={this.handleBlur} />

            <button onClick={() => this.props.onDeletePost(this.props.id)}><i className="far fa-trash-alt"></i></button>

            <select defaultValue={this.state.status} onChange={this.handleChangeStatus} >

                <option value="TODO">TODO</option>
                <option value="DOING">DOING</option>
                <option value="REVIEW">REVIEW</option>
                <option value="DONE">DONE</option>
            </select>
        </article>
    }
}

export default Post