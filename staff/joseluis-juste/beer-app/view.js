var viewListComponent = (function () {

    return {

        paintList: function (beers) {

            var self = this;
            self.clearList();

            if (beers.length) {
                var ul = document.createElement('ul');

                beers.forEach(function (beer) {


                    var li = document.createElement('li');
                    li.innerText = beer.name;

                    li.addEventListener("click", function (ev) {
                        ev.preventDefault();
                        ev.stopPropagation();
                        self.shoMarked(ev.target);
                        self.clearDetail();

                        try{
                            service.getDetail(beer.id, function (resp) {
                                self.addImage(resp);
                            });
                        }catch(error){
                            console.log(error.message);
                            self.addImage("https://even3.blob.core.windows.net/logos/canecachoppdelivery.fe0135fdb58c4241b279.png");
                        }
                        

                    });

                    ul.appendChild(li);
                });

                document.body.appendChild(ul);
            } 

        },


        addImage: function (resp) {

            var img = document.createElement('img');
            img.src = resp.url;
            document.body.appendChild(img);
        },


        shoMarked: function (el) {

            Array.prototype.forEach.call(document.getElementsByTagName('li'), function (el) {

                el.style.color = "black";

            });
            el.style.color = "red";
        },



        clearDetail: function () {

            if (document.getElementsByTagName('img').length) {
                document.body.removeChild(document.getElementsByTagName('img')[0]);
            }
        },


        clearList: function () {

            var uls = document.getElementsByTagName('ul');
            if (uls.length) {
                document.body.removeChild(uls[0]);

            }
        }
    }

})();