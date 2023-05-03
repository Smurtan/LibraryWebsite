$(function() {
    // Button animation
    $("[data-role='burger-btn']").on('click', function() {
        $('.wrapper__nav-list').toggleClass('wrapper__nav-list--active');
        $(this).toggleClass('nav__btn--active');
    });

    // Navigation link
    let infoContainer = $('#info');
    $('[data-role="nav"]').on('click', (e) => {
        e.preventDefault();
        $('.wrapper__nav-list').toggleClass('wrapper__nav-list--active');
        $("[data-role='burger-btn']").toggleClass('nav__btn--active');
        $.post(e.target.href,
            function (data) {
                if (!data) {
                    infoContainer.html(`<H3 class="system-information">Файл "${e.target.textContent}" находится в разработке`);
                } else {
                    infoContainer.html(data);
                }
            }
        );
    })
})
