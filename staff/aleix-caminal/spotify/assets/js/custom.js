function Search(title, tag, callback) {
    Panel.call(this, title, tag);
    this.form = new Form('search', [
        {
            element: 'input',
            id: 'search',
            type: 'search'
        }
    ]);

    $(this.form).on('submit', function(event) {
        event.preventDefault();
        callback(this.form);
    }.bind(this));
}

Search.prototype = Object.create(Panel.prototype);
Search.prototype.constructor = Search;

function Artists(title, tag, callback) {
    Panel.call(this, title, tag);
    $(this.element).hide();
}

Artists.prototype = Object.create(Panel.prototype);
Artists.prototype.constructor = Artists;

function Albums(title, tag, callback) {
    Panel.call(this, title, tag);
    $(this.element).hide();
}

Albums.prototype = Object.create(Panel.prototype);
Albums.prototype.constructor = Albums;

function Songs(title, tag, callback) {
    Panel.call(this, title, tag);
    $(this.element).hide();
}

Songs.prototype = Object.create(Panel.prototype);
Songs.prototype.constructor = Songs;

function Welcome(title, tag, logoutCallback) {
    Panel.call(this, title, tag);
    $(this.element).hide();

    this.logout = document.createElement('button');
    $(this.logout).html('Log Out');
    $(this.logout).addClass('panel__button');
    $(this.logout).on('click', logoutCallback);
    $(this.element).append(this.logout);
}

Welcome.prototype = Object.create(Panel.prototype);
Welcome.prototype.constructor = Welcome;
