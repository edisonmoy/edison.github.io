
	$("#red-circle").click(function() {
    var back = document.getElementById("page");
    var right_line = document.getElementById("red-line");
    var left_line = document.getElementById("blue-line");
    var nav_items = document.getElementsByTagName("a");

	if(back.style.background === "rgb(213, 105, 105)"){
     	back.style.background = "white";
        left_line.style.background = "#ADCAD3";
        right_line.style.background = "#D56969";
        for (var i = 0; i < nav_items.length; i++) {
        	nav_items[i].style.color = "#707070";
        }
    }else{
        back.style.background = "#D56969";
        left_line.style.background = "#ADCAD3";
        right_line.style.background = "#707070";
        for (var i = 0; i < nav_items.length; i++) {
        	nav_items[i].style.color = "#707070";
        }
    }
  });
	$("#blue-circle").click(function() {
   	var back = document.getElementById("page");
    var right_line = document.getElementById("red-line");
    var left_line = document.getElementById("blue-line");
    var nav_items = document.getElementsByTagName("a");

	if(back.style.background === "rgb(173, 202, 211)"){
        back.style.background = "white";
        left_line.style.background = "#ADCAD3";
        right_line.style.background = "#D56969";
        for (var i = 0; i < nav_items.length; i++) {
        	nav_items[i].style.color = "#707070";
        }
    }else{
        back.style.background = "#ADCAD3";
        for (var i = 0; i < nav_items.length; i++) {
        	nav_items[i].style.color = "#707070";
        }
        left_line.style.background = "#707070";
        right_line.style.background = "#D56969";
    }
  });
	$("#grey-circle").click(function() {
    var back = document.getElementById("page");
    var right_line = document.getElementById("red-line");
    var left_line = document.getElementById("blue-line");
    var nav_items = document.getElementsByTagName("a");

	if(back.style.background === "rgb(112, 112, 112)"){
        back.style.background = "white";
        left_line.style.background = "#ADCAD3";
        right_line.style.background = "#D56969";
        for (var i = 0; i < nav_items.length; i++) {
        	nav_items[i].style.color = "#707070";
        }
    }else{
        back.style.background = "#707070";
        for (var i = 0; i < nav_items.length; i++) {
        	nav_items[i].style.color = "#ADCAD3";
        }
        left_line.style.background = "#ADCAD3";
        right_line.style.background = "#D56969";
    }
    });
  
	

	
