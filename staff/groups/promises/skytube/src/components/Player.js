import React, {Component} from 'react'

class Player extends Component {
    state = {open: false}

    iframe() {
        return {__html: this.props.video.iframe}
    }

    handleKeyPress = event => {
        const input = event.target
        if (event.key === 'Enter' && input.value) {
            this.props.onNewPlaylist(input.value)
            input.value = ''
        }
    }

    handleClick = () => {
        this.setState({open: !this.state.open})
    }

    handlePlaylistCheck = (playlist_id, event) => {
        if (event.target.checked) {
            const video = {
                id: this.props.video.id,
                title: this.props.video.snippet.title,
                thumbnail: this.props.video.snippet.thumbnails.medium.url
            }

            this.props.onAddToPlaylist(video, playlist_id)
        } else {
            this.props.onRemoveFromPlaylist(this.props.video.id, playlist_id)
        }
    }

    checkPlaylist = videos => {
        if (videos) {
            for (var i = 0; i < videos.length; i++) {
                if (videos[i].id === this.props.video.id) {
                    return true
                }
            }
        }
        return false
    }

    render() {
        return <section className="player">
            <div className="player__video" dangerouslySetInnerHTML={this.iframe()}></div>
            <footer className="player-footer">
                <button className="player-footer__button" onClick={() => this.props.onNewFavourite(this.props.video)}><span>FAV</span></button>
                <button className="player-footer__button" onClick={() => this.props.onNewWatchLater(this.props.video)}><span>WL</span></button>
                <div className="playlists">
                    <button onClick={this.handleClick} className="player-footer__button"><span>LISTS</span></button>
                    <section className={this.state.open ? "playlists__content playlists__content--open" : "playlists__content"}>
                        <nav>
                            <h2 className="playlists__title">Add to...</h2>
                            <ul className="playlists__menu">
                                {this.props.playlists && this.props.playlists.length > 0 && (
                                    this.props.playlists.map(playlist => {
                                        return <label key={playlist.id} className="playlists__item">{playlist.title}
                                            <input type="checkbox" onChange={event => this.handlePlaylistCheck(playlist.id, event)} checked={this.checkPlaylist(playlist.videos)}/>
                                            <span className="checkmark"></span>
                                        </label>
                                    })
                                )}
                            </ul>
                            <input className="playlists__input" onKeyPress={this.handleKeyPress} placeholder="New playlist..." />
                        </nav>
                    </section>
                </div>
            </footer>
        </section>
    }
}

export default Player
