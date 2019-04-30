
	var red = "#9A67A6";
    var blue = "#79bcec";
    var dark = "#1B264F";


	$("#red-circle").click(function() {
    var back = document.getElementById("page");
    var right_line = document.getElementById("red-line");
    var left_line = document.getElementById("blue-line");
    var nav_items = document.getElementsByClassName("nav-item");
    var info = document.getElementById("info");
    var meet = document.getElementById("meet");

	if(back.style.background === "rgb(154, 103, 166)"){
        for (var i = 0; i < nav_items.length; i++) {
        	nav_items[i].style.color = dark;
        }
        back.style.background = "white";
        info.style.color = dark;
        meet.style.color = blue;
        left_line.style.background = blue;
        right_line.style.background = red;

    }else{
        for (var i = 0; i < nav_items.length; i++) {
        	nav_items[i].style.color = dark;
        }
        back.style.background = red;
        info.style.color = dark;
        meet.style.color = blue;
        left_line.style.background = blue;
        right_line.style.background = dark;
    }
  });

	$("#blue-circle").click(function() {
   	var back = document.getElementById("page");
    var right_line = document.getElementById("red-line");
    var left_line = document.getElementById("blue-line");
    var nav_items = document.getElementsByClassName("nav-item");
    var info = document.getElementById("info");
    var meet = document.getElementById("meet");


	if(back.style.background === "rgb(121, 188, 236)"){
        for (var i = 0; i < nav_items.length; i++) {
        	nav_items[i].style.color = dark;
        }
        back.style.background = "white";
        info.style.color = dark;
        meet.style.color = blue;
        left_line.style.background = blue;
        right_line.style.background = red;

    }else{
        
        for (var i = 0; i < nav_items.length; i++) {
        	nav_items[i].style.color = dark;
        }
        back.style.background = blue;
        info.style.color = dark;
        meet.style.color = red;
        left_line.style.background = dark;
        right_line.style.background = red;
    }
  });

	$("#dark-circle").click(function() {
    var back = document.getElementById("page");
    var right_line = document.getElementById("red-line");
    var left_line = document.getElementById("blue-line");
    var nav_items = document.getElementsByClassName("nav-item");
    var info = document.getElementById("info");
    var meet = document.getElementById("meet");

	if(back.style.background === "rgb(27, 38, 79)"){
        for (var i = 0; i < nav_items.length; i++) {
        	nav_items[i].style.color = dark;
        }
        back.style.background = "white";
        info.style.color = dark;
        meet.style.color = blue;
        left_line.style.background = blue;
        right_line.style.background = red;
        nav_hover.style.color = blue; //some reason need this line or else buggy

    }else{
        for (var i = 0; i < nav_items.length; i++) {
        	nav_items[i].style.color = dark;
        }
    }
    back.style.background = dark;
    info.style.color = red;
    meet.style.color = blue;
    left_line.style.background = blue;
    right_line.style.background = red;
    });

  
	

	
