$(function (){


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

})