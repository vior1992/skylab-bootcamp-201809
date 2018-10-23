import React from 'react'
import { Link } from 'react-router-dom'

function Profile(props) {
    return <section className="profile">
        <button onClick={props.onClickProfile} className="profile__button">{props.user.username}</button>
        <div className="profile__content">
            <section className="profile__info">
                <img className="profile__image" src="/img/default-user-profile.png" alt="profile"></img>
                <h1 className="profile__title">{props.user.name}</h1>
                <p className="profile__text">{props.user.email}</p>
                <Link to='/edit' className="profile__link">Return</Link>
            </section>
            <footer className="profile__footer">
                <button onClick={props.onLogOut} className="profile-footer__button">Log Out</button>
            </footer>
        </div>
    </section>
}

export default Profile
