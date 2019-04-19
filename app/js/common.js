

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

    var size = '';
    var title = '';
    var color = '';
    $('.button-buy').click(function () {
        var object = $(this).closest('div.block-text');
        var size = object.children('.block-text-size').children('.select-div').children('.size').val().trim();
        var title = object.children('.block-text-title').text().trim();
        var color = object.children('.block-text-color').find('span').eq(1).text().trim();

        console.log('size: '+ size + ' title: ' + title + ' color: ' + color);

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
