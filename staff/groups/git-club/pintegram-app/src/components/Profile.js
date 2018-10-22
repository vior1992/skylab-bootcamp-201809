import React, { Component } from 'react'
import logic from '../logic'
import PostUser from './PostUser'

class Profile extends Component {
    state = { posts: [] }

    componentDidMount() {
        debugger
        logic.listPosts()
            .then(posts => { this.setState({ posts }) })

        // TODO error handling!
    }

    // handleSubmit = text =>
    //     logic.createPost(text)
    //         .then(() => logic.listPosts())
    //         .then(posts => this.setState({ posts }))

    // // TODO error handling!

    // handleDeletePost = id =>
    //     logic.deletePost(id)
    //         .then(() => logic.listPosts())
    //         .then(posts => this.setState({ posts }))

    // // TODO error handling!


    // handleUpdatePost = (id, text) =>
    //     logic.updatePost(id, text)
    //         .then(() => logic.listPosts())
    //         .then(posts => this.setState({ posts }))

    // TODO error handling!


    render() {
        return <div>
            <a href="#" onClick={this.props.onGoBack}>back</a>
            <h1>Pintegram App</h1>

            <section>
                {this.state.posts.map(post => <PostUser key={post.id} text={post.text} id={post.id} url={post.url} text={post.description} onDeletePost={this.handleDeletePost} onUpdatePost={this.handleUpdatePost} />)}
            </section>
        </div>
    }
}

export default Profile
