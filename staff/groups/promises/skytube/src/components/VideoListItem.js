import React from 'react'

function VideoListItem(props) {
    return <article className="video-list__video">
        <img src={props.img} alt="thumbnail"></img>
        <p onClick={() => props.onClick(props.id)}>{props.title}</p>
    </article>
}

export default VideoListItem
