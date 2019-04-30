
	var red = "#9A67A6";
    var blue = "#79bcec";
    var dark = "#1B264F";


	$("#red-circle").click(function() {
    var back = document.getElementById("page");
    var right_line = document.getElementById("red-line");
    var left_line = document.getElementById("blue-line");
    var nav_items = document.getElementsByClassName("nav-item");
    var whiteout = document.getElementsByClassName("whiteout");


	if(back.style.background === "rgb(154, 103, 166)"){
        for (var i = 0; i < nav_items.length; i++) {
        	nav_items[i].style.color = dark;
        }
        for (var i = 0; i < whiteout.length; i++) {
            whiteout[i].style.background = "white";
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
        for (var i = 0; i < whiteout.length; i++) {
            whiteout[i].style.background = red;
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
    var whiteout = document.getElementsByClassName("whiteout");



	if(back.style.background === "rgb(121, 188, 236)"){
        for (var i = 0; i < nav_items.length; i++) {
        	nav_items[i].style.color = dark;
        }
        for (var i = 0; i < whiteout.length; i++) {
            whiteout[i].style.background = "white";
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
        for (var i = 0; i < whiteout.length; i++) {
            whiteout[i].style.background = blue;
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
    var whiteout = document.getElementsByClassName("whiteout");

	if(back.style.background === "rgb(27, 38, 79)"){
        for (var i = 0; i < nav_items.length; i++) {
        	nav_items[i].style.color = dark;
        }
        for (var i = 0; i < whiteout.length; i++) {
            whiteout[i].style.background = "white";
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
        for (var i = 0; i < whiteout.length; i++) {
            whiteout[i].style.background = dark;
        }
    }
    back.style.background = dark;
    left_line.style.background = blue;
    right_line.style.background = red;
    the_overlay_color.style.zIndex = 3;
    the_overlay.style.zIndex = 1;
    });


  function bannerSwitcher() {
    next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
    if (next.length) next.prop('checked', true);
    else $('.sec-1-input').first().prop('checked', true);
  }

  var bannerTimer = setInterval(bannerSwitcher, 5000);

  $('nav .controls label').click(function() {
    clearInterval(bannerTimer);
    bannerTimer = setInterval(bannerSwitcher, 5000)
  });



  
	

	
