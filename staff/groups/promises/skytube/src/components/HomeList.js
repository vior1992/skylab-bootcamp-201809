import React from 'react'

function HomeList(props) {
    return <section className="video-list">
        {props.videoList && props.videoList.length > 0 && (
            props.videoList.map(video => {
                return <article key={video.id.videoId} className="video-list__video">
                    <img src={video.snippet.thumbnails.medium.url} alt='thumbnail'></img>
                    <p onClick={() => props.onVideoClick(video.id.videoId)}>{video.snippet.title}</p>
                </article>
            })
        )}
    </section>
}

export default HomeList
