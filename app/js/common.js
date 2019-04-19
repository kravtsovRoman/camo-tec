

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

    var size  = '';
    var title = '';
    var color = '';
    $('.button-buy').click(function () {
        var object = $(this).closest('div.block-text');
        size   = object.children('.block-text-size').children('.select-div').children('.size').val().trim();
        title  = object.children('.block-text-title').text().trim();
        color  = object.children('.block-text-color').find('span').eq(1).text().trim();
    });

    $('.modal-form>.button').click(function() {
        var object = $(this).closest('div.modal-form');
        var name   = object.children('#client_name').val();
        var phone  = object.children('#client_phone').val();
        $.ajax({
            url: 'service/mailing/mail.php',
            type: 'POST',
            cache: false,
            data: {size: size, title: title, color: color, name: name, phone: phone},
            success: function (data) {
                console.log(data);
            },
            error: function () {
                console.log('404');
            }
        });
    });


});
