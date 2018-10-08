function Component(tag) {
    this.element = document.createElement(tag);
}

Component.prototype.show = function () {
    this.element.style.display = 'flex';
};

Component.prototype.hide = function () {
    this.element.style.display = 'none';
};

function Panel(title, tag) {
    Component.call(this, tag);
    this.element.className = 'panel';

    this.title = document.createElement('h2');
    this.title.innerText = title;
    this.title.className = 'panel__title';

    this.element.appendChild(this.title);
}

Panel.prototype = Object.create(Component.prototype);
Panel.prototype.constructor = Panel;

function Dialog(title, text, tag) {
    Panel.call(this, title, tag);

    this.element.className = 'dialog';

    this.title.className = 'dialog__title';

    this.body = document.createElement('p');
    this.body.innerText = text;
    this.body.className = 'dialog__body';

    this.element.appendChild(this.body);
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

    this.element.className = 'confirm';

    this.title.className = 'confirm__title';

    this.body.className = 'confirm__body';

    this.cancel = document.createElement('button');
    this.cancel.innerText = 'Cancel';
    this.cancel.className = 'confirm__button';

    this.cancel.addEventListener('click', function () {
        this.element.style.display = 'none';

        cancelCallback();
    }.bind(this));

    this.element.appendChild(this.cancel);

    this.accept = document.createElement('button');
    this.accept.innerText = 'Accept';
    this.accept.className = 'confirm__button confirm__button--accept';

    this.accept.addEventListener('click', function () {
        this.element.style.display = 'none';

        acceptCallback();
    }.bind(this));

    this.element.appendChild(this.accept);
}

Confirm.prototype = Object.create(Dialog.prototype);
Confirm.prototype.constructor = Confirm;

function Form(elements) {
    var form = document.createElement('form');
    form.className = 'form';

    function formatLabel(label) {
        var words = label.split('_');
        words.forEach(function(word, i) {
            words[i] = word.charAt(0).toUpperCase() + word.slice(1);
        });
        return words.join(' ');
    }

    elements.forEach(function(element) {
        switch (element.element) {
            case 'input':
                this.group = document.createElement('div');
                this.group.className = 'form__group';

                this.label = document.createElement('label');
                if (element.id) this.label.for = element.id;
                this.label.className = element.class ? element.class : 'form-group__label';
                this.label.innerText = element.label ? element.label : formatLabel(element.id);
                group.appendChild(this.label);

                this.input = document.createElement('input');
                if (element.id) this.input.id = element.id;
                this.input.className = element.class ? element.class : 'form-group__input';
                this.input.type = element.type ? element.type : 'text';
                group.appendChild(this.input);

                form.appendChild(this.group);
                break;
            case 'button':
                this.button = document.createElement('button');
                this.button.type = element.type ? element.type : 'button';
                if (element.label) this.button.innerText = element.label;
                this.button.className = element.class ? element.class : 'form__button';
                for (var listener in element.on) this.button.addEventListener(listener, element.on[listener]);
                form.appendChild(this.button);
                break;
        }
    });

    return form;
}
