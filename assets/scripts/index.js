
	var red = "#9A67A6";
	var blue = "#79bcec";
	var dark = "#1B264F";


	$("#red-circle").click(function() {
    var back = document.getElementById("page");
    var right_line = document.getElementById("red-line");
    var left_line = document.getElementById("blue-line");
    var nav_items = document.getElementsByClassName("nav-item");
    var stroke1 = document.getElementsByClassName("text text-stroke text-stroke-2");
    var stroke2 = document.getElementsByClassName("text text-stroke text-stroke-3");
    var stroke3 = document.getElementsByClassName("text text-stroke text-stroke-4");
    var the_overlay_color = document.getElementById("overlay-color");
    var the_overlay = document.getElementById("overlay");
    var social = document.getElementsByClassName("fa");

	if(back.style.background === "rgb(154, 103, 166)"){
        for (var i = 0; i < nav_items.length; i++) {
        	nav_items[i].style.color = dark;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke1[i].style.stroke = red;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke2[i].style.stroke = blue;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke3[i].style.stroke = red;
        }
        for (var i = 0; i < social.length; i++) {
        	social[i].style.background = red;
        }
        back.style.background = "white";
        left_line.style.background = blue;
        right_line.style.background = red;
        the_overlay_color.style.zIndex = 1;
        the_overlay.style.zIndex = 3;

    }else{
        for (var i = 0; i < nav_items.length; i++) {
        	nav_items[i].style.color = dark;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke1[i].style.stroke = dark;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke2[i].style.stroke = blue;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke3[i].style.stroke = dark;
        }
        for (var i = 0; i < social.length; i++) {
        	social[i].style.background = blue;
        }
        back.style.background = red;
        left_line.style.background = blue;
        right_line.style.background = dark;
        the_overlay_color.style.zIndex = 1;
        the_overlay.style.zIndex = 3;
    }
  });

	$("#blue-circle").click(function() {
   	var back = document.getElementById("page");
    var right_line = document.getElementById("red-line");
    var left_line = document.getElementById("blue-line");
    var nav_items = document.getElementsByClassName("nav-item");
    var stroke1 = document.getElementsByClassName("text text-stroke text-stroke-2");
    var stroke2 = document.getElementsByClassName("text text-stroke text-stroke-3");
    var stroke3 = document.getElementsByClassName("text text-stroke text-stroke-4");
    var the_overlay_color = document.getElementById("overlay-color");
    var the_overlay = document.getElementById("overlay");
   	var social = document.getElementsByClassName("fa");


	if(back.style.background === "rgb(121, 188, 236)"){
        for (var i = 0; i < nav_items.length; i++) {
        	nav_items[i].style.color = dark;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke1[i].style.stroke = red;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke2[i].style.stroke = blue;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke3[i].style.stroke = red;
        }
        for (var i = 0; i < social.length; i++) {
        	social[i].style.background = red;
        }
        back.style.background = "white";
        left_line.style.background = blue;
        right_line.style.background = red;
        the_overlay_color.style.zIndex = 1;
        the_overlay.style.zIndex = 3;

    }else{
        
        for (var i = 0; i < nav_items.length; i++) {
        	nav_items[i].style.color = dark;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke1[i].style.stroke = red;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke2[i].style.stroke = dark;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke3[i].style.stroke = red;
        }
        for (var i = 0; i < social.length; i++) {
        	social[i].style.background = red;
        }
        back.style.background = blue;
        left_line.style.background = dark;
        right_line.style.background = red;
        the_overlay_color.style.zIndex = 1;
        the_overlay.style.zIndex = 3;  
    }
  });

	$("#dark-circle").click(function() {
    var back = document.getElementById("page");
    var right_line = document.getElementById("red-line");
    var left_line = document.getElementById("blue-line");
    var nav_items = document.getElementsByClassName("nav-item");
    var stroke1 = document.getElementsByClassName("text text-stroke text-stroke-2");
    var stroke2 = document.getElementsByClassName("text text-stroke text-stroke-3");
    var stroke3 = document.getElementsByClassName("text text-stroke text-stroke-4");
    var the_overlay_color = document.getElementById("overlay-color");
    var the_overlay = document.getElementById("overlay");
    var social = document.getElementsByClassName("fa");

	if(back.style.background === "rgb(27, 38, 79)"){
        for (var i = 0; i < nav_items.length; i++) {
        	nav_items[i].style.color = dark;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke1[i].style.stroke = red;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke2[i].style.stroke = blue;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke3[i].style.stroke = red;
        }
        for (var i = 0; i < social.length; i++) {
        	social[i].style.background = red;
        }
        back.style.background = "white";
        left_line.style.background = blue;
        right_line.style.background = red;
        the_overlay_color.style.zIndex = 1;
   		the_overlay.style.zIndex = 3;
        nav_hover.style.color = blue; //some reason need this line or else buggy

    }else{
        for (var i = 0; i < nav_items.length; i++) {
        	nav_items[i].style.color = dark;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke1[i].style.stroke = red;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke2[i].style.stroke = blue;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke3[i].style.stroke = red;
        }
        for (var i = 0; i < social.length; i++) {
        	social[i].style.background = red;
        }
    }
    back.style.background = dark;
    left_line.style.background = blue;
    right_line.style.background = red;
    the_overlay_color.style.zIndex = 3;
    the_overlay.style.zIndex = 1;
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
  
	

	
