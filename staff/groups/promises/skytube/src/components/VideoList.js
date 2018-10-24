import React from 'react'
import Video from './Video'

function VideoList(props) {
    return <section className="videolist">
            <h3>{props.title}</h3>
            <div className="videolist__videos">
        {props.videoList && props.videoList.length > 0 && (
            props.videoList.map(video => {
                return <Video key={video.id} video={video} onClick={props.onVideoClick}/>
            })
        )}
        </div>
    </section>
}

export default VideoList
