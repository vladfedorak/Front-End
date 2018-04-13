//Функція бібіліотеки JQuery яка має вигляд $(selector).action()
//document це цілий html документ, ready - додати функцію, коли документ буде завантажений
$(document).ready(function() {
    // Вибираємо елемент  $("#header-toggler")
    //додаємо до цього елементу функцію, яка буде реагувати на клік
    $("#header-toggler").click(function() {
        //для цього елементу додамо клас is-active якщо його немає, або заберемо, якщо він є
        $(this).toggleClass("is-active");

        //для бічного меню
        $("#navigation").toggleClass("u-header-open");
        $("body").toggleClass("u-body--header-side-opened");
    });
});