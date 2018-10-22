import React, { Component } from 'react'
import logic from '../logic'

class Post extends Component {
    state = { postId:this.props.id, url:this.props.url, text: this.props.text, like: null, user: null}

    componentDidMount() {
        logic.retriveUser(this.props.user)
        .then(user => { this.setState({ user }) })
        
    }

    handleLikePost = () => {
        // logic.likedPost(postId)
        this.setState({ like: true })
    }

    render() {
        return <article className="post">
            <p>{this.state.user}</p>
            <img src={this.state.url}></img>
            <p>{this.state.text}</p>
            <button onClick={this.handleLikePost}>{!this.state.like ? <i className="far fa-heart"></i> : <i class="fas fa-heart"></i>}</button>
        </article>
    }
}

export default Post