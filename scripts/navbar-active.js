$(function(){
    $(".navbar li a").each(function(){
        var $this = $(this);

        var href_layers = $this.attr("href").split("/").filter(function (n) {return n != ""; });
        var location_layers = location.pathname.split("/").filter(function (n) {return n != ""; });

        if(location_layers.indexOf(href_layers[0]) !== -1){
            $this.addClass("navbar-active");
        }
    })
})