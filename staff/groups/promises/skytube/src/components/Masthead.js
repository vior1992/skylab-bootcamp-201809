import React, { Component } from 'react'
import Profile from './components/Profile'

function Masthead(props) {
    return <header className="">
        
            <h1>SkyTube</h1>
            <div>
                <input type="search">Search</input>
                <button><span>ICON</span></button>
            </div>
            <Profile onLogOut={this.props.onLogOut}/>
    </header>
}

export default Masthead