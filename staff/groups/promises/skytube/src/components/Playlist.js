import React from 'react'
import Video from './Video'

function Playlist(props) {
    return <section className="playlist">
        <section className="playlist-header">
            <h1 className="playlist-header__title">{props.playlist.title}</h1>
            <p className="playlist-header__text">{props.playlist.videos && props.playlist.videos.length > 0 ? props.playlist.videos.length + ' videos' : 'Empty playlist'}</p>
        </section>
        <section className="playlist-main">
            {props.playlist.videos && props.playlist.videos.length > 0 && (
                props.playlist.videos.map(video => {
                    return <Video key={video.id} video={video} onClick={props.onVideoClick} />
                })
            )}
        </section>
    </section>
}

export default Playlist
