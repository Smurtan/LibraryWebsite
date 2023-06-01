$("[data-role='slider']").createSlider(2000);

$("[data-role='tech-support-link']").on('click', function (e) {
    e.preventDefault();
    $("[data-link='tech-support']").trigger('click');
})