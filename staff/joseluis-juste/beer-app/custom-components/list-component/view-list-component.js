function viewListComponent(ele) {

    var self = this;
    this.main_element = ele;

    
    this.render = function (parentElement) {
        
        this.section_list = $("<section/>");
        this.section_list.css("width","22%");
        this.section_detail = $("<section/>");  
        this.section_detail.css("width","43%"); 
        this.main_section = $("<section/>");
        this.main_section.append(this.section_list);
        this.main_section.append(this.section_detail);
        this.main_element.append(this.main_section);
        parentElement.append(this.main_element);
        this.main_element.hide();
    }

    this.paintList = function (beers) {

        
        self.clearMainSection();

        if (beers.length) {
            var ul = $("<ul/>");

            beers.forEach(function (beer) {


                var li = $("<li/>");
                li.text(beer.name);

                li.on("click", function (ev) {
                    ev.preventDefault();
                    ev.stopPropagation();
                    self.showMarked(ev.target);
                    self.clearDetail();
                    self.getDetails(beer.id);
                });

                ul.append(li);
            });

            this.section_list.append(ul);
            this.main_element.show();

        } else {
            self.clearMainSection();
            var p = $("<p/>");
            p.text("!!!There are not beers...Sorry¡¡¡");
            this.main_section.css("display","block");
            this.section_list.append(p);
            this.main_element.show();

        }

    }

    this.getDetails = function (id) {

        try {
            service.getDetail(id, function (resp) {

                if (resp instanceof Error) throw resp;

                self.drawDetails(resp);
            });
        } catch (error) {
            alert("ERROR: " + error.message);
        }


    }

    this.drawDetails = function (detail) {

        if (this.main_section.css("display") === "block"){

            this.main_section.css("display","flex");
            this.main_section.css("justify-content","space-around");
    
        }   
       
        var name = $("<h2/>");
        name.text(detail.title);

        var desc = $("<p/>");
        desc.css("text-align", "justify");
        desc.text(detail.desc);

        var div = $("<div/>");
        var img = $("<img/>");
        img.attr("src", detail.url);
        div.append(img);


        this.section_detail.append(name);
        this.section_detail.append(desc);
        this.section_detail.append(div);
    }

    this.clearMainSection = function () {

        this.section_list.html("");
        this.section_detail.html("");
    }

    this.showMarked = function (el) {

        $("ul li").each((i, e) => {

            $(e).css("color", "black");

        });
        $(el).css("color", "red");

    }

    this.clearDetail = function () {

        this.section_detail.html("");
    }
}