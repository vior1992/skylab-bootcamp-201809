import React, { Component } from 'react'
import spotifyLogic from '../../services/spotifylogic'
import userService from '../../services/userlogic'
import $ from 'jquery'

export default class List extends Component {

    state = { trackFoundInPlayListMessage: "", playLists: [], list: this.props.list, type: this.props.type }


    componentWillReceiveProps(props) {

        this.setState({ list: props.list })

    }

    handleClick = (id) => {

        switch (this.state.type) {
            case "playlist":
                this.props.onPlayListClick(id)
                break;
            case "artists":
                alert(id);
                break;
            case "tracks":

                spotifyLogic.getSongsbyAlbumId(id)
                    .then((res) => {

                        let songs = []
                        let albumImage = $('.list').first().find('img').first().attr('src')

                        res.items.map(item => {

                            songs.push({ id: item.id, name: item.name, preview_url: item.preview_url, albumImage: albumImage })

                        })
                        this.props.onTracks(songs)

                    })
                    .catch(err => alert(err.message))// mostrar modal
                break;
            case "albums":
                spotifyLogic.getAlbumsByArtistId(id).then((res) => {

                    let albums = []
                    res.items.map(item => {

                        albums.push({ id: item.id, name: item.name, image: item.images.length ? item.images[0].url : "" })

                    })

                    this.props.onAlbums(albums)

                })
                    .catch(err => alert(err.message))// mostrar modal
                break;
            case "songs":
                let track = this.state.list.find((el) => {

                    return el.id === id

                })
                let preview_url = !track.preview_url ? require("../../assets/audio/default.mp3") : track.preview_url
                this.props.onPlayTrack(preview_url)
                break;
        }
    }

    getUserInfo = () => {

        const session = userService.getSessionFromStorage()
        return userService.getUserInfo(session.id, session.token).then(data => {

            return data

        }).catch(err => { throw Error(err.message) })

    }

    onClickAddTrackToList = (trackId) => {

        const text = $("#button-" + trackId).text()

        if (text === "Close") {
            $(`#${trackId}`).addClass("display-none")
            $("#button-" + trackId).text("Add To PlayList")
        } else {

            this.getUserInfo().then((data) => {

                if (data.playLists.length)
                    this.setState({ playLists: data.playLists }, () => {

                        $(`#${trackId}`).removeClass("display-none")
                        $("#button-" + trackId).text("Close")
                    })

            }).catch(err => alert(err.message))
        }

    }

    handlePlaylistClick = (trackId, playListId) => {

        let promise = this.getUserInfo()
            .then((data) => {

                if (userService.existsTrackInPlayList(data, trackId)) {
                    this.setState({ trackFoundInPlayListMessage: "This track is already in the playList" }, () => {

                        setTimeout(() => {

                            this.setState({ trackFoundInPlayListMessage: "" })

                        }, 2000)
                    })

                }
                else
                    return data
            })
            .then(data => {

                if (data) {

                    let user = userService.getUserFromData(data)
                    return userService.addTrackToPlayList(trackId, playListId, user)
                } else return data

            })
            .then(res => {
                if (res)
                    this.setState({ trackFoundInPlayListMessage: "This track has been added to the playList" }, () => {


                        setTimeout(() => {

                            this.setState({ trackFoundInPlayListMessage: "" })

                        }, 2000)

                    })
            })
            .catch(err => alert(err.message))

    }

    render() {


        return (

            <section className="list">
                <ul className="list__container">
                    {
                        this.state.list.map((item) =>

                            <li className="list__container__item">

                                <div className="list__container__item__group">
                                    <div className="list__container__item__group__img">
                                        <img src={!item.image ? require("../../assets/img/playlist.png") : item.image}></img>
                                    </div>
                                    <div onClick={() => this.handleClick(item.id)} className="list__container__item__group__name">{item.name}</div>
                                    {this.state.type === "playlist" && <div><button onClick={() => this.props.onDeleteClick(item.id)} className="list__container__item__group__button-delete btn btn-sm btn-dark">Delete</button></div>}
                                    {this.state.type === "songs" && <div><button id={`button-${item.id}`} onClick={() => this.onClickAddTrackToList(item.id)} className="list__container__item__group__button-delete btn btn-sm btn-dark">Add To PlayList</button></div>}
                                </div>
                                {this.state.type === "songs" && <div id={item.id} className="display-none list__container__item__playlists">
                                    <ul className="list__container__item__playlists-list">
                                        {
                                            this.state.playLists.map(playlist => <li onClick={() => this.handlePlaylistClick(item.id, playlist.id)}>{playlist.name}</li>)

                                        }
                                    </ul>
                                    <div className="list__container__item__playlists-message">{this.state.trackFoundInPlayListMessage}</div>
                                </div>}
                            </li>)}
                </ul>
            </section>

        );
    }
}
