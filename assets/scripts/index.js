
	var red = "#f5b089";
	var blue = "#d1e8f8";
	var grey = "#417356";


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

	if(back.style.background === "rgb(245, 176, 137)"){
        for (var i = 0; i < nav_items.length; i++) {
        	nav_items[i].style.color = grey;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke1[i].style.stroke = blue;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke2[i].style.stroke = red;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke3[i].style.stroke = blue;
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
        	nav_items[i].style.color = grey;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke1[i].style.stroke = blue;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke2[i].style.stroke = grey;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke3[i].style.stroke = blue;
        }
        for (var i = 0; i < social.length; i++) {
        	social[i].style.background = blue;
        }
        back.style.background = red;
        left_line.style.background = blue;
        right_line.style.background = grey;
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


	if(back.style.background === "rgb(209, 232, 248)"){
        for (var i = 0; i < nav_items.length; i++) {
        	nav_items[i].style.color = grey;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke1[i].style.stroke = blue;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke2[i].style.stroke = red;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke3[i].style.stroke = blue;
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
        	nav_items[i].style.color = grey;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke1[i].style.stroke = red;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke2[i].style.stroke = grey;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke3[i].style.stroke = red;
        }
        for (var i = 0; i < social.length; i++) {
        	social[i].style.background = red;
        }
        back.style.background = blue;
        left_line.style.background = grey;
        right_line.style.background = red;
        the_overlay_color.style.zIndex = 1;
        the_overlay.style.zIndex = 3;  
    }
  });

	$("#grey-circle").click(function() {
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

	if(back.style.background === "rgb(65, 115, 86)"){
        // for (var i = 0; i < nav_items.length; i++) {
        // 	nav_items[i].style.color = grey;
        // }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke1[i].style.stroke = blue;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke2[i].style.stroke = red;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke3[i].style.stroke = blue;
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
        // for (var i = 0; i < nav_items.length; i++) {
        // 	nav_items[i].style.color = red;
        // }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke1[i].style.stroke = blue;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke2[i].style.stroke = red;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke3[i].style.stroke = blue;
        }
        for (var i = 0; i < social.length; i++) {
        	social[i].style.background = red;
        }
    }
    back.style.background = grey;
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
  
	

	
