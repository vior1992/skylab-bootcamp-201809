function viewSearchComponent(searchComponent) {

    var self = this;
    this.searchComponent = searchComponent;
    this.main_element = this.searchComponent.element;
    
    this.render = function (parentElement) {
        
        var form = $('<form/>');
        var input = $('<input/>')
        var button = $('<button/>');
    
        input.attr("type","text");
        input.attr("name","search");
        input.attr("placeholder","search...");
        input.attr("id", "search");
    
        button.attr("type", "button");
        button.text("Search");
    
        form.on("submit", e => e.preventDefault());
        
        button.on("click", function(ev){
    
            self.searchComponent.getList($('#search').val());
        });

        form.append(input);
        form.append(button);
        this.main_element.append(form);
        parentElement.append(this.main_element);
    }
}