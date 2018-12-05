$(".hamburger").click(function(){
    $(".hamburger").toggleClass("is-active");
    $("nav").toggleClass("visible");
});

$("#menu a").click(function(e){
    $(".hamburger").toggleClass("is-active");
    $("nav").toggleClass("visible");
});

$("#instanext").click(function() {
    var scrollValueForAnother = ($("#instafeed").scrollLeft() + $("#instafeed").width());
    $("#instafeed").animate({
        scrollLeft: scrollValueForAnother
    }, 500);
    
    var numItems = $("#instafeed").children('a').length;
    
    if (scrollValueForAnother === $("#instafeed").width() * (numItems/3 - 1))
        $("#instanext").removeClass("active");

    $("#instaprev").addClass("active");
})

$("#instaprev").click(function() {
    var scrollValueForAnother = ($("#instafeed").scrollLeft() - $("#instafeed").width());
    $("#instafeed").animate({
        scrollLeft: scrollValueForAnother
    }, 500);

    if (scrollValueForAnother === 0)
        $("#instaprev").removeClass("active");

    $("#instanext").addClass("active");
})