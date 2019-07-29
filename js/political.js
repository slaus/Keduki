var win = $(window).width();

$(".footer p.politic").click(function () {
    $("body").css("overflow-y","hidden");
    $(".body__filter,.political").css("display","block");
});

$(".body__filter, .political img.close").click(function () {
    $("body").css("overflow-y","scroll");
    $(".body__filter, .political").css("display","none");
});

