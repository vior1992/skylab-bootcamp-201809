import React from 'react'

function Sidenav(props) {
    return <aside className="sidenav">
        <div className="sidenav-head">
            <img className="sidenav-head__logo" src="/img/skytube.logo.png" alt="logo"></img>
            <h1 className="sidenav-head__title">SkyTube</h1>
        </div>

        <div className="sidenav__lists">
            <nav>
                <ul className="sidenav__menu">
                    <li className="sidenav__item" onClick={props.onClickHome}><span className="sidenav__icon fas fa-home"></span>Home</li>
                    <li className="sidenav__item" onClick={props.onClickFavourites}><span className="sidenav__icon fas fa-star"></span>Favourites</li>
                    <li className="sidenav__item" onClick={props.onClickHistory}><span className="sidenav__icon fas fa-history"></span>History</li>
                </ul>
            </nav>

            <nav>
                <h2 className="sidenav__title">Playlists</h2>
                <ul className="sidenav__menu">
                    <li className="sidenav__item" onClick={props.onClickWatchLater}><span className="sidenav__icon fas fa-clock"></span>Watch Later</li>
                    {props.playlists && props.playlists.length > 0 && (
                        props.playlists.map(playlist => {
                            return <li key={playlist.id} className="sidenav__item" onClick={() => props.onClickPlaylist(playlist.id)}>
                                <span className="sidenav__icon fas fa-list"></span>
                                {playlist.title}
                            </li>
                        })
                    )}
                </ul>
            </nav>
        </div>
    </aside>
}

export default Sidenav
