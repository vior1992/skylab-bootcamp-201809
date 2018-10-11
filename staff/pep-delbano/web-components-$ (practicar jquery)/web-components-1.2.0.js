function Component(tag) {
    this.element = document.createElement(tag);
};


Component.prototype.show = function () {
    $(this.element).css('display','block');
};


Component.prototype.hide = function () {
    $(this.element).css('display','none');
};


function Panel(title, tag) {
    Component.call(this, tag);

    this.element.addClass("panel");

    this.title = $('<h2></h2>').text(title).addClass('panel__title');
    
    this.title.appendTo(title.body);
};

Panel.prototype = Object.create(Component.prototype);
Panel.prototype.constructor = Panel;


function Dialog(title, text, tag) {
    Panel.call(this, title, tag);

    this.element.addClass('dialog');

    this.title = $('<h2></h2>').text(title).addClass('dialog__title');

    this.text = $('<p></p>').text(text).addClass('dialog__body');

    this.title.appendTo(title.body);

    this.text.appendTo(this.body);
}

Dialog.prototype = Object.create(Panel.prototype);
Dialog.prototype.constructor = Dialog;



function Alert(title, text, tag, callback, error) {
    Dialog.call(this, title, text, tag);

    this.element.className = error ? 'alert alert--danger' : 'alert';

    this.title = $('<h2></h2>').text(title).addClass('alert__title');

    this.text = $('<p></p>').text(text).addClass('alert__body');

    this.accept = $('<button></button>').text('Accept').addClass('confirm__button--accept');

    $('.alert__title').appendTo(this.body);

    $(.'alert__body').appendTo(this.body);

    $('.confirm__button--accept').appendTo(this.body);

    // var self = this;

    // this.accept.addEventListener('click', function(event) {
    //     self.element.style.display = 'none';
    // });

    $('.alert__title').on('click', function () {
        $(this.element).css('display','none');

        callback();
    }.bind(this));

    this.accept.addClass('alert__button');

    this.accept.apendTo(this.body);
}

Alert.prototype = Object.create(Dialog.prototype);
Alert.prototype.constructor = Alert;



function Confirm(title, text, tag, acceptCallback, cancelCallback) {
    Dialog.call(this, title, text, tag);

    this.element.addClass('confirm');

    this.title.addClass('confirm__title');

    this.body.addClass('confirm__body');

    this.cancel = $('<button></button>').text('Cancel').addClass('confirm__button');

    $('.confirm__button').on('click', function () {
        this.element.style.display = 'none';

        cancelCallback();
    }.bind(this));

    $('.confirm__button').appendTo(this.body);

        
    this.accept = $('<button></button>').text('Accept').addClass('confirm__button--accept');

    $('.confirm__button--accept').on('click', function () {
        this.element.style.display = 'none';

        acceptCallback();
    }.bind(this));

    $('.confirm__button--accept').appendTo(this.body);
}

Confirm.prototype = Object.create(Dialog.prototype);
Confirm.prototype.constructor = Confirm;