import React from 'react'

function Profile(props) {
    return <div className="btn-group">
        <button onClick={props.onClickProfile} className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{props.user.username}</button>
        <div className="dropdown-menu">
            <div>
                <img className="dropdown-item" src="/styles/default-user-profile.png" href="#" alt="profile"></img>
                <h1 className="dropdown-item" href="#">{props.user.name}</h1>
                <p className="dropdown-item" href="#">{props.user.email}</p>
                <a className="dropdown-item" href="/edit">edit user</a>
            </div>
            <div>
                <button onClick={props.onLogOut}>Log Out</button>
            </div>
        </div>
    </div>
}

export default Profile
