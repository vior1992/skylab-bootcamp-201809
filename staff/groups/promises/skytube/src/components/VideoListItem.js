import React from 'react'

function VideoListItem(props) {
    return <article className = 'video' onClick={() => props.onClick(props.id)} >
        <img className = 'video__image' src={props.img} alt="thumbnail"></img>
        <h2 className = 'video__title' >{props.title}</h2>
    </article>
}

export default VideoListItem
