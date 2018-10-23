import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Profile extends Component {
    state = {open: false}

    handleClick = () => {
        this.setState({open: !this.state.open})
    }

    render() {
        return <section className="profile">
            <button onClick={this.handleClick} className="profile__button">{this.props.user.username}</button>
            <div className={this.state.open ? "profile__content profile__content--open" : "profile__content"}>
                <section className="profile__info">
                    <img className="profile__image" src="/img/default-user-profile.png" alt="profile"></img>
                    <h1 className="profile__title">{this.props.user.name}</h1>
                    <p className="profile__text">{this.props.user.email}</p>
                    <Link to='/edit' className="profile__link">Return</Link>
                </section>
                <footer className="profile__footer">
                    <button onClick={this.props.onLogOut} className="profile-footer__button">Log Out</button>
                </footer>
            </div>
        </section>
    }
}

export default Profile
