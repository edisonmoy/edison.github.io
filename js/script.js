$(document).ready(function () {
    $(this).scrollTop(0);
});

$(window).on("load", function () {
    $("#birthdayModal").modal("show");
});

$("#birthdayModalClose").click(() => {
    $("#birthdayModal").modal("hide");
    $("#happy-birthday-sound").get(0).play();
    $("#michelle-dance-container").css("display", "flex");

    setTimeout(function () {
        $("#michelle-dance-container").css("display", "none");
    }, 7500);
});

$(".row-imgs img").click(() => {
    $(".image-carousel").css("display", "block");
    $(".display-container").css("display", "none");
    $(".footer").css("display", "none");
    $(".navigation").css("display", "none");
});

$(".carousel-control-close").click(() => {
    $(".image-carousel").css("display", "none");
    $(".display-container").css("display", "block");
    $(".footer").css("display", "flex");
    $(".navigation").css("display", "block");
});
