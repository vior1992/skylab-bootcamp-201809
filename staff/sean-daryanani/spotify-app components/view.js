const view = {
    paintArtists() {
        artistList.list_elements = document.createElement('li')
        artistList.list_elements.innerText = artist.name
        artistList.ul.appendChild(artistList.list_elements)
    }
}