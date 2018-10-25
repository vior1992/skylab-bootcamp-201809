import React from 'react'
import SignUp from './SignUp'

function Header(props) {
    return <header>
        <div>
        <h1>Hello World</h1>
        <p>Skytube makes easy to enjoy your favourite music videos.
            With one click, you can save videos to watch later or add them to your favourites.
            Also, create your own playlists and have them always available to listen your favourites songs.
            Enjoy the music and always dance as if nobody can see you!</p>
        </div>

        <SignUp error={props.error} onSubmit={props.onSubmitSignUp}/>
    </header>
}

export default Header
