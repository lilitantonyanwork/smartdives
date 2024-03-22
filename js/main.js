$(function (){

    $('.tag__item ').click(function(){
        $('.tag__item').removeClass('tag__item--active');
        $(this).addClass('tag__item--active');
        var tagid = $(this).data('tag');
        $('.tab__content').removeClass('active').addClass('hide');
        $('#'+tagid).addClass('active').removeClass('hide');
    });

    $('.scroll__to').on('click', function (){
        $('html, body').animate({
            scrollTop: $(".products").offset().top
        }, 2000);
    })

    $('.menu').on('click', function (){
        $('.main__menu').toggleClass('show')
    })
    $('.search').on('click', function (){
        $('.search__menu').toggleClass('show')
    })
    $('.menu__close').on('click', function (){
        $('.main__menu').removeClass('show')
        $('.search__menu').removeClass('show')
    });
    $('.product__img').slick();

    var $slider = $('.product__carousel');
    var $progressBar = $('.slider__paging');
    var $progressBarLabel = $( '.slider__label' );

    $slider.on('afterChange', function(event, slick, currentSlide, nextSlide) {
        console.log('aaaa')
        var currentDot = $(".slick-dots .slick-active").index() + 1;
        var dots = $slider.find('.slick-dots li').length;


        var calcs = (currentDot/dots) * 100;

        $progressBar
            .css('background-size', calcs - 5 + '% 100%')
            .attr('aria-valuenow', calcs - 10 );

        $('.slider__arrow').css('left',calcs -10  + '%' );

        if($(window).width()<600){
            $('.slider__arrow').css('left',calcs-8  + '%' );
        }

        $progressBarLabel.text( calcs + '% completed' );
    });
    $('.product__carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        arrows:false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },

        ]
    });
    if($(window).width() <=600){
        $('.service__list').slick({
            arrows: false
        });

    }
    $(window).on('resize', function (){
        if($(window).width() <=600){
            $('.service__list').slick({
                arrows: false
            });
        }
    })



    $('.home').addClass('active');
    $('.arrow__bottom').on('click', function (){
        let elem = $('section.active');
        $('.arrow__top').removeClass('disabled')

        let top = $(elem).outerHeight();
        $(elem).next('section').addClass('active');
        $(elem).removeClass('active');
        let current_top = $(window).scrollTop(); // current page position
        $(window).scrollTop(current_top + top);
        let index = $('section.active').index()+1;
        $('.page__number').text('0' + index);
        if($('main section').length == index){
            $(this).addClass('disabled')
        } else{
            $(this).removeClass('disabled')

        }


    })
    $('.arrow__top').on('click', function (){
        let elem = $('section.active');

        $('.arrow__bottom').removeClass('disabled')
        let top = $(elem).outerHeight();
        $(elem).prev('section').addClass('active');
        $(elem).removeClass('active');
        let current_top = $(window).scrollTop(); // current page position
        $(window).scrollTop(current_top - top);
        let index = $('section.active').index()+1;
        $('.page__number').text('0' + index);
        if(index == 1){
            $(this).addClass('disabled')
        } else{
            $(this).removeClass('disabled')

        }


    })
})