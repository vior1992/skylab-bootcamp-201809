import React, { Component } from 'react'
import logic from '../logic'
import PostUser from './PostUser'
import PostUserLiked from './PostUserLiked'

class Profile extends Component {
    state = { posts: [], user: [], postsLiked: [], grid: true, liked: false }

    componentDidMount() {
        // progressive loading

        logic.listPosts()
            .then(posts => { this.setState({ posts }) })

        logic.retrieveProfile()
            .then(user => { this.setState({ user }) })

        logic.listLikes()
        .then(postsLiked => logic.retrievePosts(postsLiked) .then(postsLiked => { this.setState({ postsLiked }) }))

        // one-shot loading

        // Promise.all([logic.listPosts(), logic.retrieveProfile(), logic.listLikes().then(postsLiked => logic.retrievePosts(postsLiked))])
        //     .then(([posts, user, postsLiked]) => {
        //         this.setState({ posts, user, postsLiked })
        //     })
    }

    handleGallery = () => {
        this.setState({ grid: true, liked: false })
    }

    handleLiked = () => {
        this.setState({ grid: false, liked: true })
    }

    render() {
        return <div>
            <nav className="nav"><h1 onClick={this.props.onGoBack}>Pintegram App</h1>
                <div className="menu">
                    <i onClick={this.props.onPost} className="menu__button fas fa-upload"></i>
                    <i className="menu__button fas fa-user"></i>
                    <i onClick={this.props.onLogout} className="menu__button fas fa-sign-out-alt"></i>
                </div>
            </nav>
            <section className="profile">
                <div className="profile__center">
                    <div className="profile__img">
                        <img className="profile__img-small" src={this.state.user.img ? this.state.user.img : "https://res.cloudinary.com/skylabcoders/image/upload/v1540218439/skylabcoders/profile-icon-png-910.png"}></img>
                    </div>
                    <div className="profile__info">
                        <p>{this.state.user.name}</p>
                        <div className="info__stadistics">
                            <p className="stadistics">Posts {this.state.posts ? this.state.posts.length : '0'}</p>
                            <p className="stadistics">Follows {this.state.follows ? this.state.follows.length : '0'}</p>
                            <p className="stadistics">Followers {this.state.followers ? this.state.followers.length : '0'}</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="gallery">
                <i onClick={this.handleGallery} className="fas fa-th icon"></i> <i className="fas fa-bookmark icon" onClick={this.handleLiked}></i>
            </div>
            {this.state.grid && !this.state.liked && <section className="gallery">
                {this.state.posts.map(post => <PostUser key={post.id} id={post.id} url={post.url} text={post.description} onDeletePost={this.handleDeletePost} onUpdatePost={this.handleUpdatePost} />)}
            </section>}

            {!this.state.grid && this.state.liked && <section className="gallery">
                {this.state.postsLiked.map((post, index) => <PostUserLiked key={index} id={post.id} url={post.url} text={post.description} onDeletePost={this.handleDeletePost} onUpdatePost={this.handleUpdatePost} />)}
            </section>}
        </div>
    }
}

export default Profile
