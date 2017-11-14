$("#eliminarL").click(function(){
	$("ol").empty();
});

$("#recupL").click(function(){
	$("ol").html('<li>ELEMENTO 1</li><li>ELEMENTO 2</li><li>ELEMENTO 3</li><li>ELEMENTO 4</li>');
});


$("#ponerEF").click(function(){
	
	var elementos = document.getElementsByTagName("li").length + 1;
	
	$("ol").append("<li>ELEMENTO "+elementos+ "</li>");
});


$("#ponerEI").click(function(){
	
	var elementos = document.getElementsByTagName("li").length+1;
	
	$("ol").prepend("<li>ELEMENTO "+elementos+ "</li>");
});

$("#quitarEF").click(function(){
	$("li:last-child").remove();
});

$("#quitarEI").click(function(){
	$("li:first-child").remove();
});