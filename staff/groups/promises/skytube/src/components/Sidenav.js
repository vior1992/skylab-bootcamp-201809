import React from 'react'

function Sidenav(props) {
    return <aside className="sidenav">
        <button className="sidenav__title" onClick={props.onClickFavourites}>Favourites</button>
        <button className="sidenav__title" onClick={props.onClickHistory}>History</button>

        <nav>
            <h2 className="sidenav__title">Playlists</h2>
            <ul className="sidenav__menu">
                <li className="sidenav__item">
                    <button onClick={props.onClickWatchLater}>Watch Later</button>
                </li>

                {props.playlists && props.playlists.length > 0 && (
                    props.playlists.map(playlist => {
                        return <li className="sidenav__item">
                            <button onClick={() => props.onClickPlaylist(playlist.id)}>{playlist.name}</button>
                        </li>
                    })
                )}
            </ul>
        </nav>
    </aside>
}

export default Sidenav
