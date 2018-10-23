import React from 'react'
import Profile from './Profile'

function Masthead(props) {
    return <header className="masthead">
        <h1 className="masthead__title">SkyTube</h1>
        <div>
            <input type="search" placeholder="Search..."></input>
            <button><span>ICON</span></button>
        </div>
        <Profile onLogOut={props.onLogOut} user={props.user} />
    </header>
}

export default Masthead
