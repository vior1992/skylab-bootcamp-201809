import React from 'react'
import Video from './Video'

function VideoList(props) {
    return <section className="videolist">
        {props.videoList && props.videoList.length > 0 && (
            props.videoList.map(video => {
                return <Video key={video.id} video={video} onClick={props.onVideoClick}/>
            })
        )}
    </section>
}

export default VideoList
