$(document).ready(function() {
    $(".tabs-menu li").click(function(event) {
        event.preventDefault();
        $(this).addClass("current");
        $(this).siblings().removeClass("current");
        var tab = $(this).children().attr("href");
        $(".tab-content").css("display","block");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});