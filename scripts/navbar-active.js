$(function(){
    $(".navbar li a").each(function(){
        var $this = $(this);
        if("/" + $this.attr("href") == location.pathname){
            $this.addClass("navbar-active");
        }
    })
})