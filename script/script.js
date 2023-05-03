$(function() {
    $('.nav__btn').on('click', function() {
        $('.wrapper__nav-list').toggleClass('wrapper__nav-list--active');
        $(this).toggleClass('nav__btn--active');
    });
})
