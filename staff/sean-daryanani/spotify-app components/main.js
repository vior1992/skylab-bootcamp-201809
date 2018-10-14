const wrapper = document.querySelector(".wrapper")

let searchBar = new Search('section', function (query) {

    let artistList = new List('section', 'Artists')

    wrapper.appendChild(artistList.element)


    logic.searchArtists(query)

        .then(artists => {
            var arr_artists = []
            arr_artists.push(...artists.artists.items)
            arr_artists.forEach(artist => {
                const id = artist.id
                artistList.list_elements = document.createElement('li')
                artistList.list_elements.innerText = artist.name
                artistList.ul.appendChild(artistList.list_elements)

                artistList.list_elements.addEventListener('click', () => {

                    let albumList = new List('section', 'Albums')

                    wrapper.appendChild(albumList.element)

                    logic.listAlbums(id)
                        .then(albums => {
                            var arr_albums = []
                            arr_albums.push(...albums.items)
                            arr_albums.forEach(album => {

                                const album_id = album.id
                                albumList.list_elements = document.createElement('li')
                                albumList.list_elements.innerText = album.name
                                albumList.ul.appendChild(albumList.list_elements)

                                albumList.list_elements.addEventListener('click', () => {
                                    let songList = new List('section', 'Songs')
                                    wrapper.appendChild(songList.element)

                                    logic.listTracks(album_id)
                                        .then(tracks=> {
                                            var arr_tracks = []
                                            arr_tracks.push(...tracks.items)

                                            arr_tracks.forEach(track => {

                                                const track_id = track.id
                                                const track_preview = track.preview_url
                                                songList.list_elements = document.createElement('li')
                                                songList.list_elements.innerText = track.name
                                                songList.ul.appendChild(songList.list_elements)

                                                songList.list_elements.addEventListener('click', () => {
                                                    let selectedTrack = new TrackBox('section', 'https://via.placeholder.com/350x150', track_preview )
                                                    wrapper.appendChild(selectedTrack.element)
                                                    
                                                    
                                                })
                                            })
                                        }).catch(console.error)

                                })
                            })
                        })
                        .catch(console.error)
                })
            })

        })
        .catch(console.error)
})

wrapper.appendChild(searchBar.element)