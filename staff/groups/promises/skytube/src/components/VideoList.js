import React from 'react'
import VideoListItem from './VideoListItem'

function VideoList(props) {
    return <section className="videolist">
        {props.videoList && props.videoList.length > 0 && (
            props.videoList.map(video => {
                return <VideoListItem key={video.id.videoId} id={video.id.videoId} title={video.snippet.title} img={video.snippet.thumbnails.medium.url} onClick={props.onVideoClick} />
            })
        )}
    </section>
}

export default VideoList
