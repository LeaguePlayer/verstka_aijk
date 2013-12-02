$(document).ready(function () {

    /* ---------- Разделение суммы на тысячи */

    function format(comma, period) {
        comma = comma || ',';
        period = period || '.';
        var split = this.toString().split('.');
        var numeric = split[0];
        var decimal = split.length > 1 ? period + split[1] : '';
        var reg = /(\d+)(\d{3})/;
        while (reg.test(numeric)) {
            numeric = numeric.replace(reg, '$1' + comma + '$2');
        }
        return numeric + decimal;
    }

    $('.inp, .money_input').on('keyup', function () {
        $(this).val(format.call($(this).val().split(' ').join(''), ' ', '.'));
    }); /* Разделение суммы на тысячи ----------*/


    /* ----------------------------------------- Калькулятор */
    if ($('.what_interest').length) {

        $('.what_interest .item').click(function () {

            var targetId = $(this).index() - 1;

            if (!$(this).is('.active')) {
                movePointer(targetId);
                showPage(targetId);
            }
            return false;
        });

        function movePointer(id) {

            var leftPos = $('.what_interest .item').eq(id).position().left;
            var width = $('.what_interest .item').eq(id).outerWidth() - $('.what_interest .item').eq(id).width() + ($('.what_interest .item').eq(id).width() / 2) + leftPos - 30;

            $('.pointer_rail .pointer').animate({
                left: width
            }, 150, function () {
                $('.what_interest .item.active').removeClass('active');
                $('.what_interest .item').eq(id).addClass('active');
            });
        }

        function showPage(id) {

            var newHeight = $('.calculate .calc').eq(id).height();
            var top = $('body, html').scrollTop();
            $('.calculate .calc:visible').stop(true, true).fadeOut(500);
            $('.calculate .calc').eq(id).stop(true, true).fadeIn(500);
            $('.calculate').animate({
                'height': newHeight
            });
        }

        showPage(0);
        movePointer(0);
    } /* Калькулятор ----------------------------------------- */


    /* ----------------------------------------- Количество детей */
    if ($('.child_rate').length) {

        var currentState;

        $('.child_rate a').click(function () {

            var childrens = $(this).index();

            if (currentState != childrens) {

                $('.child_rate a:lt(' + childrens + ')').each(function () {
                    $(this).addClass('active');
                    $(this).parent().find('input').val(childrens);
                    currentState = childrens;
                });

                $('.child_rate a:gt(' + (childrens - 1) + ')').each(function () {
                    $(this).removeClass('active');
                });

            } else {
                $('.child_rate a.active').removeClass('active');
                $(this).parent().find('input').val(0);
                currentState = 0;
            }

            return false;
        });
    } /* Количество детей -------------------------------------- */


/* ----------------------------------------- Слайдер */

    var slides = $('.main-slider button').length;
    var auto;

    if ($('.main-slider').length) {
        $(".main-slider .slide").jCarouselLite({
            /*auto: 3000,*/
            speed: 500,
            visible: 1,
            beforeStart: function(a) {
                var id = a.index()+1;
                var cur = $('.slide .current').data('id');
                console.log(cur)
                $('.main-slider button').removeClass('active');
                $('.slider_nav button').removeClass('active');
                $('.main-slider .'+id).addClass('active');
                $('.slider_nav .'+id).addClass('active');
                if(id-1 == slides) {
                    $('.main-slider .1').addClass('active');
                    $('.slider_nav .1').addClass('active');
                    changeSlide(1);
                } else {
                    changeSlide(id);
                }
            },
            btnGo: [".1", ".2", ".3", ".4", ".5"]
        });

        $('.main-slider button, .slider_nav button').click(function(){
            var id = parseInt($(this).attr('class'));
            $('.main-slider button, .slider_nav button').removeClass('active');
            $('.main-slider .'+id).addClass('active');
            $('.slider_nav .'+id).addClass('active');
        });
    }

    function changeSlide(id) {
            $('.main-slider img').fadeOut(500);
            $('.main-slider img:eq('+(id-1)+')').fadeIn(500);
    }

/* Слайдер -------------------------------------- */



/* ----------------------------------------- Переключатель объектов */

$('.toggle .completed').click(function(){

    $('.toggle a').removeClass('active');

    $('.objects .constr').hide();
    $('.objects .compl').show();

    $(this).addClass('active');

    return false;
});

$('.toggle .construction').click(function(){

    $('.toggle a').removeClass('active');

    $('.objects .compl').hide();
    $('.objects .constr').show();

    $(this).addClass('active');
    return false;
});

/* Переключатель объектов ----------------------------------------- */

$('#move_calculate').click(function(){
    $.fancybox.open($('.move_box'));
    return false;
});

$('.loan_item .pick_button').click(function(){
    $.fancybox.open($('.full_request_box'));
    return false;
});

if($('select').length) {
    $("select").styler();
}

});