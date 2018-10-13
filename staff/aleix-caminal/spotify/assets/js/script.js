const main = document.querySelector('#main');
const playlist = document.querySelector('#playlist');
const collapse = document.querySelector('#collapse');

var albums = [
    {title: 'Absolution', author: 'Muse', cover: 'absolution.jpg'},
    {title: 'City of Evil', author: 'Avenged Sevenfold', cover: 'cityofevil.jpg'},
    {title: 'Hybrid Theory', author: 'Linkin Park', cover: 'hybridtheory.jpg'},
    {title: 'Plastic Beach', author: 'Gorillaz', cover: 'paintbeach.jpg'},
    {title: 'Siren Song of the Counter Culture', author: 'Rise Against', cover: 'sirensong.jpg'},
];

printAlbums();
function printAlbums() {
    for (var i in albums) {
        var article = document.createElement('article');
        article.className = 'container';
        main.appendChild(article);

        var wrapper = document.createElement('div');
        wrapper.className = 'container__image';
        article.appendChild(wrapper);

        var image = document.createElement('div');
        image.style.backgroundImage = "url('assets/img/" + albums[i].cover + "')";
        image.className = 'selectable';
        wrapper.appendChild(image);

        var small = document.createElement('small');
        small.className = 'container__title container__title--small';
        small.innerHTML = albums[i].author;
        article.appendChild(small);

        var title = document.createElement('h4');
        title.className = 'container__title';
        title.innerHTML = albums[i].title;
        article.appendChild(title);
    }

    alignAlbums();
}

function alignAlbums() {
    var px, columns = 0;
    var width = main.offsetWidth - (parseFloat(getComputedStyle(main).paddingLeft) + parseFloat(getComputedStyle(main).paddingRight));

    do {
        columns++;
        px = Math.floor(width / columns);
    } while (px > 240);
    main.style.gridTemplateColumns = "repeat(" + columns + ", " + columns + "fr)";
}

playlist.addEventListener('click', function() {
    document.body.className = document.body.classList.contains('open') ? ' ' : 'open';
    alignAlbums();
});

collapse.addEventListener('click', function() {
    document.body.className = '';
    alignAlbums();
});

window.addEventListener('resize', function() {
    alignAlbums();
});
