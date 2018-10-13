function Component(tag, className) {
    this.element = document.createElement(tag);
    $(this.element).addClass(className);
}

Component.prototype.show = function () {
    $(this.element).show();
};

Component.prototype.hide = function () {
    $(this.element).hide();
};

function Panel(title, tag) {
    Component.call(this, tag);
    $(this.element).addClass('panel');

    this.title = document.createElement('h2');
    $(this.title).html(title);
    $(this.title).addClass('panel__title');
    $(this.element).append(this.title);
}

Panel.prototype = Object.create(Component.prototype);
Panel.prototype.constructor = Panel;

function Footer() {
    Component.call(this, 'footer', 'footer');

    // control section
    this.control = document.createElement('section');
    $(this.control).addClass('control');
    $(this.element).append(this.control);

    this.prev = document.createElement('button');
    $(this.prev).attr('id', 'prev');
    $(this.prev).addClass('control__button control__button--sm');
    $(this.prev).html('<');
    $(this.control).append(this.prev);

    this.play = document.createElement('button');
    $(this.play).attr('id', 'play');
    $(this.play).addClass('control__button');
    $(this.play).html('P');
    $(this.control).append(this.play);

    this.next = document.createElement('button');
    $(this.next).attr('id', 'next');
    $(this.next).addClass('control__button control__button--sm');
    $(this.next).html('>');
    $(this.control).append(this.next);

    // player section
    this.player = document.createElement('section');
    $(this.player).addClass('player');
    $(this.element).append(this.player);

    this.audio = document.createElement('audio');
    $(this.audio).attr('id', 'player');
    $(this.player).append(this.audio);

    this.ahead = document.createElement('label');
    $(this.ahead).attr('id', 'time-ahead');
    $(this.ahead).addClass('player__time');
    $(this.ahead).html('-:--');
    $(this.player).append(this.ahead);

    this.bar = document.createElement('div');
    $(this.bar).addClass('player__bar');
    this.progress = document.createElement('span');
    $(this.progress).attr('id', 'progress');
    $(this.progress).width(0);
    $(this.bar).append(this.progress);
    $(this.player).append(this.bar);

    this.left = document.createElement('label');
    $(this.left).attr('id', 'time-left');
    $(this.left).addClass('player__time');
    $(this.left).html('-:--');
    $(this.player).append(this.left);

    /* <section class="current-song">
        <div class="current-song__image">
            <div style="background-image: url('assets/img/cityofevil.jpg')"></div>
        </div>
        <div class="current-song__text">
            <h1>Blinded in Chains</h1>
            <p>Avenged Sevenfold Avenged Sevenfold</p>
            <p>City of Evil</p>
        </div>
    </section> */
}

Footer.prototype = Object.create(Component.prototype);
Footer.prototype.constructor = Footer;

function Search(title, tag, callback) {
    Component.call(this, tag, 'search');
    this.title = document.createElement('h1');
    $(this.title).html(title);
    $(this.title).addClass('search__title');
    $(this.element).append(this.title);

    this.form = new Form('search', [
        {
            element: 'input',
            type: 'search',
            label: false,
            class: 'search__input'
        }
    ]);

    $(this.form).on('submit', function(event) {
        event.preventDefault();
        callback(this.form);
    }.bind(this));
    $(this.element).append(this.form);
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

function Form(id, elements) {
    this.form = document.createElement('form');
    if (id) $(this.form).attr('id', id)
    $(this.form).addClass('form');

    function formatLabel(label) {
        var words = label.split('_');
        $.each(words, function(i, word) {
            words[i] = word.charAt(0).toUpperCase() + word.slice(1);
        });
        return words.join(' ');
    }

    var that = this;
    $.each(elements, function(i, element) {
        switch (element.element) {
            case 'input':
                that.group = document.createElement('div');
                $(that.group).addClass('form__group');

                that.input = document.createElement('input');
                if (element.id) $(that.input).attr('id', element.id);
                $(that.input).addClass(element.class ? element.class : 'form-group__input');
                $(that.input).prop('type', element.type ? element.type : 'text');
                $(that.group).append(that.input);

                if (element.label !== false) {
                    that.label = document.createElement('label');
                    if (element.id) $(that.label).attr('for', element.id);
                    $(that.label).addClass(element.class ? element.class : 'form-group__label');
                    $(that.label).html(element.label ? element.label : formatLabel(element.id));
                    $(that.group).prepend(that.label);
                }

                $(that.form).append(that.group);
                break;
            case 'button':
                if (typeof that.buttons === 'undefined') {
                    that.buttons = document.createElement('div');
                    $(that.buttons).addClass('form__buttons');
                    $(that.form).append(that.buttons);
                }

                that.button = document.createElement('button');
                $(that.button).prop('type', element.type ? element.type : 'button');
                if (element.label) $(that.button).html(element.label);
                $(that.button).addClass(element.class ? element.class : 'form-buttons__button');
                $.each(element.on, function(listener, callback) {
                    $(that.button).on(listener, callback);
                });

                $(that.buttons).append(that.button);
                break;
        }
    });

    return this.form;
}
