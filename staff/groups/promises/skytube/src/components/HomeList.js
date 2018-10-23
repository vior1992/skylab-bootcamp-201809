import React, {Components} from 'react'
import VideoItem from './VideoItem'

function HomeList(props) {
    return <div>
        {props.videoList.map(item => <VideoItem key={item.id.videoId} img={item.snippet.thumbnails.medium} title={item.snippet.title} onClickSong={()=>props.onVideoClick(item.id.videoId)}/>)}
    </div>

}

export default HomeList