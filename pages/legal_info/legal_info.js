let infoContainer = $('#info');
$('[data-role="content-nav"]').on('click', (e) => {
    e.preventDefault();

    $.post(e.target.href,
        function (data) {
            if (!data) {
                infoContainer.html(`<H3 class="system-information">Файл "${e.target.textContent}" находится в разработке`);
            } else {
                infoContainer.html(data);
            }
        }
    );
});