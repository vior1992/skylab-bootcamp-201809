import React from 'react'

function Sidenav(props) {
    return <aside className="sidenav">
        <button className="sidenav__title" onClick={props.onClickFavourites}>Favourites</button>
        <button className="sidenav__title" onClick={props.onClickWatchLater}>Watch Later</button>
        <button className="sidenav__title" onClick={props.onClickHistory}>History</button>

        <nav>
            <h2 className="sidenav__title">Playlists</h2>
            <ul className="sidenav__menu">
                {props.playlists && props.playlists.length > 0 ? (
                    props.playlists.map(playlist => {
                        return <li className="sidenav__item">
                            <button onClick={() => props.onClickPlaylist(playlist.id)}>{playlist.name}</button>
                        </li>
                    })
                ) : (
                    <li className="sidenav__item--blank">You don't have playlists currently</li>
                )}
            </ul>
        </nav>
    </aside>
}

export default Sidenav
