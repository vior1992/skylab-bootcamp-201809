import React from 'react'

function Profile(props) {
    return <div className="dropwdown">
        <button className="userpic">{props.user.username}</button>
        <div className="dropdown-content">
            <div>
                <img alt="profile"></img>
                <h1>{props.user.name}</h1>
                <p>{props.user.email}</p>
                <a href="/edit">edit user</a>
            </div>
            <div>
                <button onClick={props.onLogOut}>Log Out</button>
            </div>
        </div>
    </div>
}

export default Profile
