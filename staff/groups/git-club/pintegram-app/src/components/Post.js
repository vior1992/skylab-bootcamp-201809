import React, { Component } from 'react'
import logic from '../logic'
import AddComment from './AddComment'

class Post extends Component {
    state = { postId:this.props.id, url:this.props.url, text: this.props.text, liked: null, likes: undefined, user: null, comments: [], comment:false, commentsCount: 0}

    // constructor(props) {
    //     super(props)
    //     // create a ref to store the textInput DOM element
    //     this.state = { postId:this.props.id, url:this.props.url, text: this.props.text, liked: null, likes: undefined, user: null}
    //     this.comment = React.createRef()
    // }
    
    componentDidMount() {
        logic.retriveUser(this.props.user)
            .then(user => { this.setState({ user }) })
        
        logic.likesPost(this.state.postId)
            .then(likes => { this.setState({ likes }) })
       
        logic.likedPost(this.state.postId)
            .then(liked => { this.setState({ liked }) })
        
        logic.commentsPost(this.state.postId)
        .then(commentsCount => { this.setState({ commentsCount }) })
        
    }

    handleLikePost = () => {
        logic.addLike(this.state.postId)
        .then(Promise.all([logic.likesPost(this.state.postId), logic.likedPost(this.state.postId)])
            .then(([likes, liked]) => {this.setState({ likes, liked})}))

        // logic.addLike(this.state.postId)
        //    .then(logic.likesPost(this.state.postId).then(likes => { this.setState({ likes })}))
        //    .then(logic.likedPost(this.state.postId).then(liked => { this.setState({ liked })}))
    }

    handleAddComment = (content) => {
        debugger
        logic.addComment(this.state.postId, content)
        .then(logic.commentsPost(this.state.postId).then(commentsCount => { this.setState({ commentsCount }, ()=> this.handleOffComment) }))
    }

    handleComment = () => {
        this.setState({comment : true}) 
    }
    handleOffComment= () => {
        debugger
        this.setState({comment : false}) 
    }

    render() {
        return <article className="post">
            <div className="post__justify">
            <div className="post__center">
            <h1 className="post__text">{this.state.user}</h1>
            <img className="post__img" src={this.state.url}></img>
            <div className="post__icon">
            {!this.state.liked ? <i onClick={this.handleLikePost} className="far fa-heart icon"></i> : <i className="fas fa-heart icon"></i>}{this.state.likes}
            <i onClick={this.handleComment} className="fas fa-comment icon"></i>{this.state.commentsCount}
            </div>
            <p className="post__text post__text-margin">{this.state.text}</p> 
            {/* <p className="comments"></p> */}
            {this.state.comment && <AddComment onAddComment={this.handleAddComment} />}
            </div> 
            </div>    
        </article>
    }
}

export default Post