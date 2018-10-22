import React, { Component } from 'react'
import logic from '../logic'

class PostUser extends Component {
    state = { postId:this.props.id, url:this.props.url, text: this.props.text, likes: null}

    componentDidMount() {
        logic.listPosts()
            .then(posts => { this.setState({ posts }) })

        logic.likesPost(this.state.postId)
            .then(likes => { this.setState({ likes }) })
    }

    handleLikePost = () => {
        // logic.likedPost(postId)
        this.setState({ like: true })
    }

    render() {
        return <section className="gallery__user">
            <img className="user__img" src={this.state.url}></img>
            <div classNam="user__likes"><i className="fas fa-heart icon"></i>{this.state.likes ? this.state.likes.length : 0}</div>

        </section>
    }
}

export default PostUser