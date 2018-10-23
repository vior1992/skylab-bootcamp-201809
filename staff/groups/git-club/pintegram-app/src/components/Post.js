import React, { Component } from 'react'
import logic from '../logic'

class Post extends Component {
    state = { postId:this.props.id, url:this.props.url, text: this.props.text, liked: null, likes: undefined, user: null, comment: false}

    componentDidMount() {
        logic.retriveUser(this.props.user)
            .then(user => { this.setState({ user }) })
        
        logic.likesPost(this.state.postId)
            .then(likes => { this.setState({ likes }) })
       
        logic.likedPost(this.state.postId)
            .then(liked => { this.setState({ liked }) })
        
    }

    handleLikePost = () => {
        logic.addLike(this.state.postId)
           .then(logic.likesPost(this.state.postId).then(likes => { this.setState({ likes })}))
           .then(logic.likedPost(this.state.postId).then(liked => { this.setState({ liked })}))
    }

    handleAddComment = () => {
        logic.addComment(this.state.postId, )
           .then(logic.likesPost(this.state.postId).then(likes => { this.setState({ likes })}))
           
    }

    handleComment = () => {
        
    }

    render() {
        return <article className="post">
            <div className="post__justify">
            <div className="post__center">
            <h1 className="post__text">{this.state.user}</h1>
            <img className="post__img" src={this.state.url}></img>
            <div className="post__icon">
            {!this.state.liked ? <i onClick={this.handleLikePost} className="far fa-heart icon"></i> : <i className="fas fa-heart icon"></i>}{this.state.likes}
            <i onClick={this.handleComment} className="fas fa-comment icon"></i>
            </div>
            <p className="post__text post__text-margin">{this.state.text}</p> 
            {/* <p className="comments"></p> */}
            {!this.state.comment && <AddComment />}
            </div> 
            </div>    
        </article>
    }
}

export default Post