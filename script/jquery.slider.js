(function ($) {
    $.fn.createSlider = function (speed) {
        let $this = $(this);
        let $group = $this.find('.slide__group');
        let $slides = $this.find('.slide');
        let buttonArray = [];
        let currentIndex = 0;
        let timeout;

        function move(newIndex) {
            var animateLeft, slideLeft;

            advance();


            if ($group.is(':animated') || currentIndex === newIndex) {
                return;
            }

            buttonArray[currentIndex].removeClass('active');
            buttonArray[newIndex].addClass('active');

            if (newIndex > currentIndex) {
                slideLeft = '100%';
                animateLeft = '-100%';
            } else {
                slideLeft = '-100%';
                animateLeft = '100%';
            }

            $slides.eq(newIndex).css({left: slideLeft, display: 'block'});

            $group.animate({left: animateLeft}, function () {
                $slides.eq(currentIndex).css({display: 'none'});
                $slides.eq(newIndex).css({left: 0});
                $group.css({left: 0});
                currentIndex = newIndex;
            });
        }

        function advance() {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                if (currentIndex < ($slides.length - 1)) {
                    move(currentIndex + 1);
                } else {
                    move(0);
                }
            }, speed);
        }

        $.each($slides, function (index) {
            var $button = $('<button type="button" class="slider__btn">&bull;</button>');
            if (index === currentIndex) {
                $button.addClass('active');
            }
            $button.on('click', function () {
                move(index);
            }).appendTo('.slide__buttons');
            buttonArray.push($button);
        });

        advance();
        return this;
    }
})(jQuery);


