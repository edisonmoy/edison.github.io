$(document).ready(function () {
    $(this).scrollTop(0);
});

// When image is clicked
$(".row-imgs img").click((e) => {
    var src = e.target.src.trim();

    // Set clicked image as active
    $(".carousel-item").each(function (i, obj) {
        var currImgSrc = $(this).find("img").attr("src").trim();

        if (currImgSrc.includes(src) || src.includes(currImgSrc)) {
            $(this).attr("class", "carousel-item active");
        } else {
            $(this).attr("class", "carousel-item");
        }
    });

    // Show modal and hide all other content
    $(".image-carousel").css("display", "block");
    $(".display-container").css("display", "none");
    $(".footer").css("display", "none");
    $(".navigation").css("display", "none");
});

// Hide modal and show all other content
$(".carousel-control-close").click(() => {
    $(".image-carousel").css("display", "none");
    $(".display-container").css("display", "block");
    $(".footer").css("display", "flex");
    $(".navigation").css("display", "block");
});
