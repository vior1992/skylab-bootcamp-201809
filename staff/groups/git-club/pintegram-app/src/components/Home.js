import React, { Component } from 'react'

import logic from '../logic'
import Post from './Post'

class Home extends Component {
    state = { posts: [], liked : []}

    componentDidMount() {
        logic.listAllPosts()
        .then(posts => this.setState({ posts }))
        // TODO error handling!
        logic.listLikes()
        logic.listPosts()
     
    }
    

    render() {
        return <div className="div-home">
            <nav className="nav"><h1>Pintegram App</h1>
            <div className="menu">
                <i onClick={this.props.onPost} className="menu__button fas fa-upload"></i>
                <i onClick={this.props.onProfile} className="menu__button fas fa-user"></i>
                <i onClick={this.props.onLogout} className="menu__button fas fa-sign-out-alt"></i>
            </div>
            </nav>
            <section className="home__post">
                {this.state.posts.map(post => <Post key={post.id} id={post.id} url={post.url} text={post.description} user={post.userId} />)}
            </section>
        </div>
    }
}

export default Home
