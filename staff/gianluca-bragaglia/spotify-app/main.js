const $artists = $('.artists')
const $albums = $('.albums')

$artists.hide()
$albums.hide()

const $form = $('form')

$form.submit(event => {
    event.preventDefault()

    const $input = $form.find('input')

    const query = $input.val()

    logic.searchArtists(query)
        .then(artists => {
            listArtist(artists)
        })
        .catch(console.error)
})

function listArtist(artists) {
    $artists.show()

    const $ul = $artists.find('ul')

    $ul.empty()

    artists.forEach(artist => {
        const $a = $(`<a href="#">${artist.name}</a>`)

        $a.click(() => {
            event.preventDefault()

            // TODO search albums by artist id

            const id = artist.id
            console.log(id);

            logic.searchAlbums(id)
                .then(albums => {
                    listArtist(albums)
                })
                .catch(console.error)


        })

        const $li = $('<li>')

        $li.append($a)

        $ul.append($li)
    })
}


function listAlbums(albums) {
    $albums.show()

    const $ulAlbums = $('.list-albums')
    const $liAlbums = $ulAlbums.find('li')
    const $aAlbums = $ulAlbums.find('a')

    $ulAlbums.empty()

    albums.forEach(album => {

        $aAlbums = $(`<a href="#">${album.name}</a>`)

        $aAlbums.click(() => {
            event.preventDefault()


        })
    })
    $liAlbums = $('<li>')

    $liAlbums.append($aAlbums)

    $ulAlbums.append($liAlbums)
}