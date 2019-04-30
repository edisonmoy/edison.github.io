
    var red = "#9A67A6";
    var blue = "#79bcec";
    var dark = "#1B264F";


    $("#red-circle").click(function() {
    var back = document.getElementById("page");
    var right_line = document.getElementById("red-line");
    var left_line = document.getElementById("blue-line");
    var nav_items = document.getElementsByClassName("nav-item");
    var social = document.getElementsByClassName("fa");
    var contact = document.getElementById("contact-info");
    var resume = document.getElementById("resume");

    if(back.style.background === "rgb(154, 103, 166)"){
        for (var i = 0; i < nav_items.length; i++) {
            nav_items[i].style.color = dark;
        }
        for (var i = 0; i < social.length; i++) {
            social[i].style.background = red;
        }
        back.style.background = "white";
        contact.style.color = dark;
        resume.style.color = dark;
        left_line.style.background = blue;
        right_line.style.background = red;

    }else{
        for (var i = 0; i < nav_items.length; i++) {
            nav_items[i].style.color = dark;
        }
        for (var i = 0; i < social.length; i++) {
            social[i].style.background = blue;
        }
        back.style.background = red;
        contact.style.color = dark;
        resume.style.color = dark;
        left_line.style.background = blue;
        right_line.style.background = dark;
    }
  });

    $("#blue-circle").click(function() {
    var back = document.getElementById("page");
    var right_line = document.getElementById("red-line");
    var left_line = document.getElementById("blue-line");
    var nav_items = document.getElementsByClassName("nav-item");
    var social = document.getElementsByClassName("fa");
    var contact = document.getElementById("contact-info");
    var resume = document.getElementById("resume");


    if(back.style.background === "rgb(121, 188, 236)"){
        for (var i = 0; i < nav_items.length; i++) {
            nav_items[i].style.color = dark;
        }
        for (var i = 0; i < social.length; i++) {
            social[i].style.background = red;
        }
        back.style.background = "white";
        contact.style.color = dark;
        resume.style.color = dark;
        left_line.style.background = blue;
        right_line.style.background = red;

    }else{
        
        for (var i = 0; i < nav_items.length; i++) {
            nav_items[i].style.color = dark;
        }
        for (var i = 0; i < social.length; i++) {
            social[i].style.background = red;
        }
        back.style.background = blue;
        contact.style.color = dark;
        resume.style.color = dark;
        left_line.style.background = dark;
        right_line.style.background = red; 
    }
  });

    $("#dark-circle").click(function() {
    var back = document.getElementById("page");
    var right_line = document.getElementById("red-line");
    var left_line = document.getElementById("blue-line");
    var nav_items = document.getElementsByClassName("nav-item");
    var social = document.getElementsByClassName("fa");
    var contact = document.getElementById("contact-info");
    var resume = document.getElementById("resume");

    if(back.style.background === "rgb(27, 38, 79)"){
        for (var i = 0; i < nav_items.length; i++) {
            nav_items[i].style.color = dark;
        }
        for (var i = 0; i < social.length; i++) {
            social[i].style.background = red;
        }
        back.style.background = "white";
        contact.style.color = dark;
        resume.style.color = dark;
        left_line.style.background = blue;
        right_line.style.background = red;
        nav_hover.style.color = blue; //some reason need this line or else buggy

    }else{
        for (var i = 0; i < nav_items.length; i++) {
            nav_items[i].style.color = dark;
        }
        for (var i = 0; i < social.length; i++) {
            social[i].style.background = red;
        }
    }
        back.style.background = dark;
        contact.style.color = red;
        resume.style.color = red;
        left_line.style.background = blue;
        right_line.style.background = red;
    });

$(function() {
  $('.intro').addClass('go');

  // $('.reload').click(function() {
  //   $('.intro').removeClass('go').delay(200).queue(function(next) {
  //     $('.intro').addClass('go');
  //     next();
  //   });

  // });
})
  
    

    
