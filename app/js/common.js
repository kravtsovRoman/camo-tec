

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

    //Slider reviews
    $(".owl-carousel").owlCarousel({
        items: 1,
        dots: true,
        center: true,
        autoWidth: true,
        margin: 500,
    });

    // @Fancybox on Screenshot page
    $(function () {
        $("[data-fancybox='gallery']").fancybox({
        });
    });





    $('.button-buy').click(function (e) {
        var object = $(this).closest('div.block-text');

        var select = object.children('.block-text-size').children('.select-div')
            .children('.size').val();

        $.ajax({
            url: 'service/mailing/mail.php',
            type: 'POST',
            cache: false,
            dataType: 'json',
            data: {k: 'okey'},
            success: function (data) {
                console.log(data);
            }, error: function () {
                console.log('404');
            }
        });
    });


});
