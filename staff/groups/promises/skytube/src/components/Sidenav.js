import React from 'react'

function Sidenav(props) {
    return <aside>
        <section>
            <button onClick={props.onClickFavourites}>Favourites</button>
        <section>

        </section>
            <button onClick={props.onClickWatchLater}>Watch Later</button>
        </section>
        <section>
            <h2>Playlists</h2>
            <nav>
                <ul>
                    {props.playlists && props.playlists.length > 0 ? (
                        props.playlists.map(playlist => {
                            return <li><button onClick={() => props.onClickPlaylist(playlist.id)}>{playlist.name}</button></li>
                        })
                    ) : (
                        <li>You don't have playlists currently</li>
                    )}
                </ul>
            </nav>
        </section>
    </aside>
}

export default Sidenav
