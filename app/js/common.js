

$(document).ready(function () {

    // go to top 
    // $('.scroll-btn').on('click', function (e) {
    //     e.preventDefault();
    //     var id = $(this).attr('href'),
    //         top = $(id).offset().top;

    //     $('body,html').animate({scrollTop: top}, 500);
    // });

    // goToTop.on('click', function (e) {
    //     e.preventDefault();

    //     $('body,html').animate({scrollTop: $('body,html').offset().top}, 500);
    // });



    // @Fancybox on Screenshot page
    $(function () {
        $("[data-fancybox='gallery']").fancybox({
        });
    });
});