$('[data-role="accordion-btn"]').on('click', function (e) {
    e.preventDefault();
    $(this).children('[data-role="accordion-arrow"]').toggleClass('accordion__arrow--active')
    $(this)
        .next('[data-role="accordion-content"]')
        .not(':animated')
        .slideToggle();
});