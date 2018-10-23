import React from 'react'

function VideoItem(props) {

    return <div >
        <img  src={props.img.url} alt='facecover' ></img>
        <p onClick={props.onClickSong}>{props.title}</p>
    </div>
}

export default VideoItem