$(function () {
    function insertBook(element, data) {
        let fragment = ''
        const books = data[element.data().json];

        for (const item in books) {
            fragment += [
                `<A class="book__item" href="#">`,
                    `<img class="book__img" src="${books[item]['img']}" alt="Думай и богатей">`,
                    `<p class="book__title">${books[item]['title']}</p>`,
                    `<p class="book__author">${books[item]['auth']}</p>`,
                    `<div class="book__rating">`,
                        `<div class="rating__star">`,
                            `<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">`,
                            `<path d="M9.49998 14.4625L5.33748 17.6406C5.13123 17.8094 4.90623 17.8892 4.66248 17.8803C4.41873 17.8713 4.2031 17.8008 4.0156 17.6688C3.8281 17.5375 3.68298 17.3594 3.58023 17.1344C3.47748 16.9094 3.4726 16.6656 3.5656 16.4031L5.16873 11.2L1.0906 8.30313C0.865604 8.15313 0.724979 7.95625 0.668729 7.7125C0.612479 7.46875 0.621854 7.24375 0.696854 7.0375C0.771854 6.83125 0.903104 6.64825 1.0906 6.4885C1.2781 6.32875 1.5031 6.24925 1.7656 6.25H6.79998L8.43123 0.850001C8.52498 0.587501 8.67048 0.385752 8.86773 0.244752C9.06498 0.103752 9.27573 0.0336264 9.49998 0.0343764C9.72498 0.0343764 9.9361 0.104877 10.1334 0.245877C10.3306 0.386877 10.4757 0.588251 10.5687 0.850001L12.2 6.25H17.2344C17.4969 6.25 17.7219 6.32988 17.9094 6.48963C18.0969 6.64938 18.2281 6.832 18.3031 7.0375C18.3781 7.24375 18.3875 7.46875 18.3312 7.7125C18.275 7.95625 18.1344 8.15313 17.9094 8.30313L13.8312 11.2L15.4344 16.4031C15.5281 16.6656 15.5236 16.9094 15.4209 17.1344C15.3181 17.3594 15.1726 17.5375 14.9844 17.6688C14.7969 17.8 14.5812 17.8705 14.3375 17.8803C14.0937 17.89 13.8687 17.8101 13.6625 17.6406L9.49998 14.4625Z" fill="#FF8224"/>`,
                            `</svg>`,
                        `</div>`,
                        `<span class="rating__rating">${books[item]['rating']}</span>`,
                        `<span class="rating__count">${books[item]['count_review']}</span>`,
                    `</div>`,
                `</A>`
            ].join("");
        }


        element.html(fragment);
    }

    // Button animation
    $("[data-role='burger-btn']").on('click', function () {
        $('.wrapper__nav-list').toggleClass('wrapper__nav-list--active');
        $(this).toggleClass('nav__btn--active');
    });

    // Navigation link
    let infoContainer = $('#info');
    $('[data-role="nav"]').on('click', (e) => {
        e.preventDefault();
        $('.wrapper__nav-list').removeClass('wrapper__nav-list--active');
        $("[data-role='burger-btn']").removeClass('nav__btn--active');

        let link = e.target;
        while (link.tagName !== 'A') {
            link = link.parentElement;
        }

        $.post(link.href,
            function (data) {
                if (!data) {
                    infoContainer.html(`<H3 class="system-information">Файл "${e.target.textContent}" находится в разработке`);
                } else {
                    infoContainer.html(data);
                    let infoJSON = $('#info [data-theme="book"][data-json]');
                    if (infoJSON) {
                        $.post("../data/books.json",
                            function (books) {
                                insertBook(infoJSON, books);
                            })
                    }
                }
            }
        );
    });

    $('#first-page').trigger('click');
})
