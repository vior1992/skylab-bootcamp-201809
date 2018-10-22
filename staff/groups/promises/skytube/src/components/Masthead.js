import React from 'react'
import Profile from './Profile'

function Masthead(props) {
    return <header className="">
        <h1>SkyTube</h1>
        <div>
            <input type="search" placeholder="Search..."></input>
            <button><span>ICON</span></button>
        </div>
        <Profile onLogOut={props.onLogOut}/>
    </header>
}

export default Masthead
