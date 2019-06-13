$(function () {
    var anim = $('.animOn');

    setTimeout(() => {
        $(anim).removeClass('d-none');
        $(anim).addClass('animated');
    }, 700);

       setTimeout(() => {
           $('.title').removeClass('d-none');
           $('.title').addClass('animated');
       }, 400);


})