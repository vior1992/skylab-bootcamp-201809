
function Component(tag) {
    this.element = $('<' +tag+ '>'+'</ '+ tag +'>');
}   

Component.prototype.show = function () {
    this.element.style.display = 'block';
};

Component.prototype.hide = function () {
    this.element.style.display = 'none';
};

function Panel(title, tag) {
    Component.call(this, tag);

    $(this.element).addClass('panel');

    this.title=$('<h2>title</h2>').text(title).addClass('panel__title');
   
    $(this.element).append(this.title);
}

Panel.prototype = Object.create(Component.prototype);
Panel.prototype.constructor = Panel;

function Dialog(title, text, tag) {
    Panel.call(this, title, tag);

    $(this.element).addClass('panel')
    //this.element.className = 'dialog';
    $(this.title).addClass('dialog__title');
    //this.title.className = 'dialog__title';
    
    this.body = document.createElement('p');
    this.body.innerText = text;
    this.body.className = 'dialog__body';

    $(this.element).append(this.body);
}

Dialog.prototype = Object.create(Panel.prototype);
Dialog.prototype.constructor = Dialog;

function Alert(title, text, tag, callback, error) {
    Dialog.call(this, title, text, tag);

    this.element.className = error ? 'alert alert--danger' : 'alert';

    this.title.className = 'alert__title';

    this.body.className = 'alert__body';

    this.accept = document.createElement('button');
    this.accept.innerText = 'Accept';

    // var self = this;

    // this.accept.addEventListener('click', function(event) {
    //     self.element.style.display = 'none';
    // });

    this.accept.addEventListener('click', function () {
        this.element.style.display = 'none';

        callback();
    }.bind(this));

    this.accept.className = 'alert__button';

    this.element.appendChild(this.accept);
}

Alert.prototype = Object.create(Dialog.prototype);
Alert.prototype.constructor = Alert;

function Confirm(title, text, tag, acceptCallback, cancelCallback) {
    Dialog.call(this, title, text, tag);

    $(this.element).addClass('confirm');
   
    $(this.title).addClass= 'confirm__title';
    
    $(this.body).addClass = 'confirm__body';
    
    this.cancel= $('button').text('Cancel').click(function () {
        this.element.style.display = 'none';

        cancelCallback();
    }.bind(this));
   
   $(this.cancel).addClass('confirm__button');
   
    $(this.cancel).appendTo(this.element);


    this.accept = $('button').text('Accept').click(function () {
        this.element.style.display = 'none';

        acceptCallback();
    }.bind(this));
                          
    $(this.accept).addClass('confirm__button confirm__button--accept');
   
    $(this.element).append(this.accept);
}

Confirm.prototype = Object.create(Dialog.prototype);
Confirm.prototype.constructor = Confirm;