import React, { Component } from 'react'

import logic from '../logic'
import Post from './Post'

class Home extends Component {
    state = { posts: []}

    // componentDidMount() {
    //     // logic.listAllPosts()
    //     //     .then(posts => { this.setState({ posts }) })
    //         // Request for images tagged xmas       
    //         axios.get('https://res.cloudinary.com/christekh/image/list/xmas.json')
    //             .then(res => {
    //                 console.log(res.data.resources);
    //                 this.setState({posts: res.data.resources});
    //             });
    //     // TODO error handling!
    // }

    componentDidMount() {
        logic.listAllPosts()
        .then(posts => { this.setState({ posts }) })
        // TODO error handling!
    }
    

    render() {
        return <div className="div-home">
            <h1>Pintegram App</h1>
            <button onClick={this.props.onPost} className="upload-button">Post</button>
            <button onClick={this.props.onProfile} className="upload-button">Profile</button>
            <section>
                {this.state.posts.map(post => <Post key={post.id} text={post.text} id={post.id} url={post.url} text={post.description} user={post.userId} onDeletePost={this.handleDeletePost} onUpdatePost={this.handleUpdatePost} />)}
            </section>
        </div>
    }
}

export default Home
