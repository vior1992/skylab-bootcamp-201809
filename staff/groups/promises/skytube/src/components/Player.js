import React, {Component} from 'react'

class Player extends Component {
    iframe() {
        return {__html: this.props.video.items[0].player.embedHtml}
    }

    render() {
        return <div id='player' dangerouslySetInnerHTML={this.iframe()}></div>
    }
}
export default Player
