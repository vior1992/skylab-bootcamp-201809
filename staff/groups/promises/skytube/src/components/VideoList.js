import React from 'react'
import VideoListItem from './VideoListItem'

function VideoList(props) {
    return <section className="videolist">
            <h3>{props.title}</h3>
            <div className="videolist__videos">
        {props.videoList && props.videoList.length > 0 && (
            props.videoList.map(video => {
                return <VideoListItem key={video.videoId} id={video.videoId} title={video.title} img={video.img}  onClick={()=>props.onVideoClick(video.videoId,video.title,video.img)}/>
            })
        )}
        </div>
    </section>
}

export default VideoList
