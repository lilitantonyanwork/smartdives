$(function (){
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4','page5'],
        sectionsColor: ['white', 'white', 'white', 'white', 'white'],
        navigation:false,
        afterRender: function(){
            $('#pp-nav').addClass('custom');
        },
        afterLoad: function(anchorLink, index){
            if(index>1){
                $('#pp-nav').removeClass('custom');
            }else{
                $('#pp-nav').addClass('custom');
            }
        }
    });

    $('.menu').on('click', function (){
        $('.main__menu').toggleClass('show')
    })
    $('.menu__close').on('click', function (){
        $('.main__menu').removeClass('show')
    })
})