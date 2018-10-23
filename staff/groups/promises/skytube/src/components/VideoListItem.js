import React from 'react'

function VideoListItem(props) {
    return <article className = 'video-item' onClick={() => props.onClick(props.id)} >
        <img src={props.img} alt="thumbnail"></img>
        <p >{props.title}</p>
    </article>
}

export default VideoListItem
