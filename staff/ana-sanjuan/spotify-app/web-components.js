function Component() {
    this.element = $('<section>');
}

Component.prototype.show = function () {
    this.element.css('display', 'block');
};

Component.prototype.hide = function () {
    this.element.css('display', 'none');
};


function Artists(artists) {

    Component.call(this)
//listArtist(artists) {

    if($oneTrack.css('display') !== 'none') $oneTrack.hide()

    if($tracks.css('display') !== 'none') $tracks.hide()

    if($albums.css('display') !== 'none') $albums.hide()



    // const $artists = $('.artists')
    // $artists.hide()

    this.element.addClass('.artists');

    this.$ul = this.element.find('ul')
    this.$title = this.element.find('h2')
    this.$title.text('Artist: ' + query)

    this.$ul.empty()


    artists.forEach(artist => {
        let artistName = artist.name
        const $a = $(`<a href="#">${artistName}</a>`)

        $a.click(() => {
            var id = artist.id
            logic.searchAlbums(id)
                .then(res => {
                    var albums = res.items
                    view.listAlbums(albums,artistName)
                })
                .catch(console.error)
        })

        this.$li = $('<li>')

        this.$li.append($a)

        this.$ul.append(this.$li)
    })

}


Artists.prototype = Object.create(Component.prototype);
Artists.prototype.constructor = Artists;