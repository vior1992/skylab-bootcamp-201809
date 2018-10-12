function ListComponent(title, tag) {
    Panel.call(this, title, tag);

    var self = this;

    this.viewEngine = new viewListComponent(this);
    
    this.viewEngine.render($("body"));

    this.paintList = function(beers){

        self.viewEngine.paintList(beers);
    }
}

ListComponent.prototype = Object.create(Panel.prototype);
ListComponent.prototype.constructor = ListComponent;