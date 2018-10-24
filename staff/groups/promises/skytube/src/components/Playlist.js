import React from 'react'
import Video from './Video'

function Playlist(props) {
    return <section className="playlist">
        <section className="playlist__header">
            <h1>{props.playlist.title}</h1>
            <p>{props.playlist.videos && props.playlist.videos.length > 0 ? props.playlist.videos.length + ' videos' : 'Empty playlist'}</p>
        </section>
        <section className="playlist__main">
            {props.playlist.videos && props.playlist.videos.length > 0 && (
                props.playlist.videos.map(video => {
                    return <Video key={video.id} video={video} onClick={props.onVideoClick} />
                })
            )}
        </section>
    </section>
}

export default Playlist
