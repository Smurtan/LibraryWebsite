$('[data-role="sign-link"]').on('click', function (e) {
    e.preventDefault();
    let parent = $(this).data().parent;
    let href = $(this).attr('href');
    $('[data-role=' + parent + ']').toggleClass('hidden');
    $('[data-role=' + href + ']').toggleClass('hidden');
});

$('[data-role="sign-in-form"]').on('submit', function (e) {
    e.preventDefault();
    let emailNode = $(this).find('#in-email');
    let passNode = $(this).find('#in-password');
    console.log("Мы отправили запрос на вход");
    console.log("Почта: ", emailNode.val());
    console.log("Пароль: ", passNode.val());
    emailNode.val('');
    passNode.val('');
});

$('[data-role="show-password"]').on('click', function (e) {
    $(this).toggleClass('password__eye--active');
    if ($(this).hasClass('password__eye--active')) {
        $(this).siblings('input').attr('type', 'text');
    } else {
        $(this).siblings('input').attr('type', 'password');
    }
})