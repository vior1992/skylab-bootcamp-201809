import React, { Component } from 'react'
import logic from '../logic'
import Form from './Form'
import PostItList from './PostItList'

class PostIt extends Component {
  state = {
    user: this.props.user,
    items: logic.listPostIts(this.props.user.id)
  }

  render() {
    return (
      <div className="row justify-content-center my-3">
        <div className="col-6">
          <div className="text-center my-3">
            <h1 className="h3 mb-3 font-weight-normal d-inline">Post-it</h1>
            <span className="badge badge-primary ml-2">{this.state.user.name}</span>
            <button type="button" className="btn btn-sm btn-outline-primary d-inline ml-4 mb-2" onClick={this.handleClick}>Log Out</button>
          </div>
          <Form onSubmit={this.handleSubmit} />
          <PostItList items={this.state.items} onRemoveItem={this.handleRemoveItem} />
        </div>
      </div>
    )
  }

  handleClick = event => {
    this.props.onClick()
  }

  handleSubmit = text => {
    logic.createPostIt(this.state.user.id, text)

    this.setState({ items: logic.listPostIts(this.state.user.id) })
  }

  handleRemoveItem = (id) => {
    logic.deletePostIt(id)

    this.setState({ items: logic.listPostIts(this.state.user.id) })
  }
}

export default PostIt