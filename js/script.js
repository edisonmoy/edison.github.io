$(document).ready(function () {
    $(this).scrollTop(0);
});

$(window).on("load", function () {
    //  $("#birthdayModal").modal("show");
});

$("#birthdayModalClose").click(() => {
    $("#birthdayModal").modal("hide");
    $("#happy-birthday-sound").get(0).play();
    $("#michelle-dance-container").css("display", "flex");

    setTimeout(function () {
        $("#michelle-dance-container").css("display", "none");
    }, 7500);
});
