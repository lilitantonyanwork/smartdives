$(function (){
    $('.tag__item ').click(function(){
        $('.tag__item').removeClass('tag__item--active');
        $(this).addClass('tag__item--active');
        var tagid = $(this).data('tag');
        $('.tab__content').removeClass('active').addClass('hide');
        $('#'+tagid).addClass('active').removeClass('hide');
    });

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
    // $('.product__carousel').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     centerMode: true,
    //     infinite: false
    // });
    if($(window).width() <=600){
        $('.service__list').slick({
            arrows: false
        });
        $('.product__carousel').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
            arrows:false
            })
    }
    $(window).on('resize', function (){
        if($(window).width() <=600){
            $('.service__list').slick({
                arrows: false
            });
        }
    })

})