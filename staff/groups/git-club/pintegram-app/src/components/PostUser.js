import React, { Component } from 'react'

class PostUser extends Component {
    state = { postId:this.props.id, url:this.props.url, text: this.props.text, like: null}


    handleLikePost = () => {
        // logic.likedPost(postId)
        this.setState({ like: true })
    }

    render() {
        return <article className="post">
            <img src={this.state.url}></img>
            <p>{this.state.text}</p>
            <button onClick={this.handleLikePost}>{!this.state.like ? <i className="far fa-heart"></i> : <i class="fas fa-heart"></i>}</button>
        </article>
    }
}

export default PostUser