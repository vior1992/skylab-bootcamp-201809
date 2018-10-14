class Component {
    constructor(tag, className) {
        this.element = document.createElement(tag);
        $(this.element).addClass(className);
    }

    show(display = 'block') {
        $(this.element).css('display', display);
    }

    hide() {
        $(this.element).hide();
    }
}

class Lists extends Component{
    constructor() {
        super('list', 'list') 
        this.title = document.createElement('h2')
        this.title.addClass('list__class')

        this.ul = document.createElement('ul')
        this.ul.addClass('list-group')
        
        this.li = document.createElement('li')
        this.li.addClass('list-group-item list-group-item-action')

        this.anchor = document.createElement('a')
        this.anchor.
    }
}