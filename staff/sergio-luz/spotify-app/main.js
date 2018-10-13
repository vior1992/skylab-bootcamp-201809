const $form = $('form')

$form.submit(event => {
    event.preventDefault()

    const $input = $form.find('input')

    const query = $input.val()

    logic.searchArtists(query)
        .then(arr => {
            let artists = [];
            artists.push(...arr.artists.items)
            view.listArtist(artists)
        })
        .catch(console.error)
})

