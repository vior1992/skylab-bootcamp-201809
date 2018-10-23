import React, {Component} from 'react'

class Player extends Component {
    iframe() {
        return {__html: this.props.video.player.embedHtml}
    }

    handleKeyPress = event => {
        const input = event.target
        if (event.key === 'Enter' && input.value) {
            this.props.onNewPlaylist(input.value)
            input.value = ''
        }
    }

    render() {
        return <section className="player">
            <div id='player' dangerouslySetInnerHTML={this.iframe()}></div>
            <div>
                <button className="player__button" onClick={() => this.props.onNewFavourite(this.props.video.id)}><span>FAV</span></button>
                <button className="player__button" onClick={() => this.props.onNewWatchLater(this.props.video.id)}><span>WL</span></button>
                <div className="player-dropwdown">
                    <button className="player__button"><span>LISTS</span></button>
                    <div className="player-dropwdown__content">
                        <nav>
                            <h2 className="player-dropwdown__title">Add to...</h2>
                            <ul className="player-dropwdown__menu">
                                {this.props.playlists && this.props.playlists.length > 0 && (
                                    this.props.playlists.map(playlist => {
                                        return <li key={playlist.id} className="player-dropwdown__item">
                                            <button>{playlist.title}</button>
                                        </li>
                                    })
                                )}
                                <li className="player-dropwdown__item">
                                    <input onKeyPress={this.handleKeyPress} placeholder="New playlist..." />
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    }
}

export default Player
