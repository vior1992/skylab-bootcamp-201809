import React, { Component } from 'react'
import PostOtherUser from './PostOtherUser'

class OtherProfile extends Component {
    state = { posts: this.props.onInitialize.posts , user: this.props.onInitialize, postsLiked: [], grid: [], liked: false }

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
                    <i className="menu__button fas fa-user" onClick={this.props.onGoBack}></i>
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
                <i onClick={this.handleGallery} className="fas fa-th icon"></i> 
            </div>
             <section className="gallery">
                {this.state.posts.map(post => <PostOtherUser key={post.id} id={post.id} url={post.url} text={post.description} onDeletePost={this.handleDeletePost} onUpdatePost={this.handleUpdatePost} />)}
            </section>
        </div>
    }
}



export default OtherProfile