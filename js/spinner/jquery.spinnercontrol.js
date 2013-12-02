$(document).ready(function () {

    var startValue = 12;
    var maxValue = 120;

    $(".phone").mask("+7(999)999-9999");

    if ($('.slider').length) {
        $(".slider").slider({
            step: startValue,
            max: maxValue,
            min: startValue,
            value: startValue,
            range: "max",
            animate: true
        });
    }

    function periodTip(period) {

        var handle = $('.ui-slider-handle');
        var years;
        var yearText;

        years = period / 12;

        switch (true) {
        case (years == 1):
            yearText = ' год';
            break;
        case (1 < years && years <= 4):
            yearText = ' года';
            break;
        case (years > 4):
            yearText = ' лет';
            break;
        }


        handle.find('.count').remove();
        handle.append("<div class='count'>" + years + yearText + "</div>");
        handle.find('.count').delay(500).fadeOut(500);
    }

    $(".slider").on("slide", function (event, ui) {

        $('.SpinnerControl .ValueDisplay').val(ui.value);
        periodTip(ui.value);
    });

    $('.SpinnerControl').each(function () {

        var sid;
        sid++;

        $(this).find('.ValueDisplay').val(startValue);

        $(this).find('.RightButton').click(function () {
            var current = parseInt($(this).parent().find('.ValueDisplay').val());
            if (current + startValue <= maxValue) {
                var plusValue = current + startValue;
                $(this).parent().find('.ValueDisplay').val(plusValue);
                $('.slider').slider("value", plusValue);
                periodTip(plusValue);
            }
        });

        $(this).find('.LeftButton').click(function () {
            var current = parseInt($(this).parent().find('.ValueDisplay').val());
            if (current > startValue) {
                var minusValue = current - startValue;
                $(this).parent().find('.ValueDisplay').val(minusValue);
                $('.slider').slider("value", minusValue);
                periodTip(minusValue);
            }
        });


    });


});