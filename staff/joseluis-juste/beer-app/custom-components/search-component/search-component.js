function SearchComponent(title, tag) {
    Panel.call(this, title, tag);
    
    var self = this;

    this.viewEngine = new viewSearchComponent(this);
    
    this.viewEngine.render($("body"));

    this.getList = function(val){

        service.getList(val, function(resp){
    
            if (resp instanceof Error)
                listBeers.paintList([]);
                     
            
            listBeers.paintList(resp);

        });
    }
}

SearchComponent.prototype = Object.create(Panel.prototype);
SearchComponent.prototype.constructor = SearchComponent;