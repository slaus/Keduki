//

var win = $(window).width();
console.log(win);

var $root = $('html, body');
$('a').click(function () {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 800, function () {
        window.location.hash = href;
    });
    return false;
});

$(".image").owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    items: 1
});

$(".bags__conti-img").owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    items: 1
});

$(".bags__tireno-img").owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    items: 1
});

$(".bags__vintage-img-image").owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    items: 1
});

$(".work__review-block").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        980: {
            items: 3
        }
    }
});

$(".order-form input[name='phone']").closest('.form-group')
    .after('<div class="select-box"><select class="select-elem"><option selected="selected" value="Размер" class="" disabled="disabled">Выберите размер</option><option value="40/26.5" class="">40/26.5</option><option value="41/27.5" class="">41/27.5</option><option value="42/28" class="">42/28</option><option value="42/28" class="">43/28.5</option><option value="42/28" class="">44/29</option><option value="42/28" class="">45/29.5</option></select></div>');

var orderClass = [];
$("button.order").click(function () {
   orderClass = $(this).attr("class");
   var newClass = orderClass.slice(6, 15)
   $(".popUp."+newClass).css("left","50%");
   $(".body__filter").css("display","block");
    $("body").css("overflow-y","hidden");
});


$(".body__filter").click(function () {
    $(".popUp").css("left","-150%");
});

//      Генаратор Промо кода
var randomNumber;

function randomCode() {
    randomNumber = Math.round(Math.random()*100000);
    if(randomNumber > 10000) {
        document.getElementById('code').innerHTML = randomNumber;
    } else {
        randomNumber = randomNumber * 10;
        document.getElementById('code').innerHTML = randomNumber;
    }
    // return randomNumber;
}

$("button.generator").click(function () {
    randomCode();
});

// $(".order-form input[name='name_first']").closest('.form-group')
//     .after('<div class="select-box"><select class="select-elem"><option selected="selected" value="Размер" class="" disabled="disabled">Размер: </option><option value="34/22 см." class="">34/22 см.</option><option value="35/22,7 см." class="">35/22,7 см.</option><option value="36/23,4 см." class="">36/23,4 см.</option><option value="37/24,1 см" class="">37/24,1 см</option><option value="38/24,8 см." class="">38/24,8 см.</option><option value="39/25,6 см." class="">39/25,6 см.</option></select></div>');
//
//
// $("p.politic").click(function () {
//     $("body").css("overflow-y","hidden");
//     $(".body__filter").css("display","block");
//     $(".political").css("display","block");
// });
//
// $("img.close").click(function () {
//     $("body").css("overflow-y","scroll");
//     $(".body__filter").css("display","none");
//     $(".political").css("display","none");
// });
//
// $(".form-group:nth-child(1)").addClass("name");
// $(".select-box:nth-child(2)").addClass("size");
// $(".form-group:nth-child(3)").addClass("phone");
// $(".form-group:nth-child(4)").addClass("button");
