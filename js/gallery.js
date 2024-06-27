$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.gallery-filter').click(function(){
        var filter = $(this).attr('data-filter');
        $('.gallery-filter').removeClass('active');
        $(this).addClass('active');

        if(filter == 'all') {
            $('.gallery-item').show().addClass('active');
        } else {
            $('.gallery-item').hide().removeClass('active');
            $('.' + filter).show().addClass('active');
        }
    });
});