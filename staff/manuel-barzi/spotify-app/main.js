logic.token = 'BQBbUCEqEyq3y9COLDJMceLQJt9h6UEi3NsDGNkZ-aFjUKYZZ6x_byNH-UeN3EUIOuayJwAnk5B0ZNzmOyjRs-Vikg0fv3934FUWZ1AqKehrsTrIku7xJivngwM5hwGEJ3m-rhHBYInvNsA'

const $artists = $('.artists')

$artists.hide()

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
            console.log(artist)

            // TODO search albums by artist id
        })

        const $li = $('<li>')

        $li.append($a)

        $ul.append($li)
    })
}